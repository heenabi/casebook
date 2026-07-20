import { DESIGN_CASES } from "./cases-data.js?v=2";
import mixpanel from "mixpanel-browser";
import { MIXPANEL_TOKEN } from "./config.js";

// Initialize Mixpanel
mixpanel.init(MIXPANEL_TOKEN, { debug: false, track_pageview: true, persistence: 'localStorage' });

// Track Initial Page View for retention
mixpanel.track('Page_View');

// ==========================================================================
// Casebook Application Logic
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // --- State Variables ---
  let selectedCategories = [];
  let selectedDomains = [];
  let queryText = "";

  // --- Category Key → Display Label Mapping ---
  const CATEGORY_LABELS = {
    "가입":       "가입 전환율 개선",
    "인증/본인확인": "인증/본인확인 개선",
    "정보입력":    "정보입력 허들 낮추기",
    "인트로":     "인트로 이탈률 감소",
    "결제":       "결제 전환율 개선",
    "홈":         "효율적인 화면 구성",
    "효율적인":   "효율적인 화면 구성"
  };
  function getCategoryLabel(cat) {
    for (const [key, label] of Object.entries(CATEGORY_LABELS)) {
      if (cat.includes(key)) return label;
    }
    return cat;
  }

  // --- Valid Domains (must match filter chips) ---
  const VALID_DOMAINS = ['핀테크', '커머스', '헬스케어', '글로벌', '콘텐츠', '에듀테크', 'B2B'];
  function getDisplayDomains(domainStr) {
    if (!domainStr) return [];
    return domainStr.split(/,\s*/).filter(d => VALID_DOMAINS.includes(d.trim()));
  }

  // --- LocalStorage Keys ---
  const KEYS = {
    FIRST_VISIT:       "casebook_first_visit",
    VISIT_COUNT:       "casebook_visit_count",
    SAVED_IDS:         "casebook_saved_ids",
    TOTAL_SEARCHES:    "casebook_total_searches",
    TOTAL_ADOPTIONS:   "casebook_total_adoptions",
    ADOPTION_LOG:      "casebook_adoption_log"
  };

  // --- Initialize Analytics & LocalStorage ---
  initSessionAndStats();

  // --- DOM Elements ---
  const categoryChips   = document.getElementById("category-chips");
  const domainChips     = document.getElementById("domain-chips");
  const inputQuery      = document.getElementById("input-query");
  const charCounter     = document.getElementById("char-counter");
  const validationMsg   = document.getElementById("validation-msg");
  const searchForm      = document.getElementById("search-form");
  const btnSearch       = document.getElementById("btn-search");

  function updateSearchButtonState() {
    if (selectedCategories.length > 0 && selectedDomains.length > 0) {
      btnSearch.disabled = false;
    } else {
      btnSearch.disabled = true;
    }
  }

  const resultsSection    = document.getElementById("results-section");
  const resultsCountTitle = document.getElementById("results-count-title");
  const casesList         = document.getElementById("cases-list");
  const emptyState        = document.getElementById("empty-state");

  const mainContainer     = document.getElementById("main-container");
  const welcomeSection    = document.getElementById("welcome-section");
  const resultsHeaderLeft = document.getElementById("results-header-left");
  const rightColumn       = document.getElementById("right-column");

  // Saved View Elements
  const btnDrawer       = document.getElementById("btn-drawer");
  const savedView         = document.getElementById("saved-view");
  const savedCasesList    = document.getElementById("saved-cases-list");
  const savedEmptyState   = document.getElementById("saved-empty-state");
  const savedCountBadge = document.getElementById("saved-count");

  const btnFeedback       = document.getElementById("btn-feedback");
  const feedbackView        = document.getElementById("feedback-view");
  const feedbackInputState  = document.getElementById("feedback-input-state");
  const feedbackSuccessState= document.getElementById("feedback-success-state");
  const feedbackTextarea    = document.getElementById("feedback-textarea");
  const feedbackCharCount   = document.getElementById("feedback-char-count");
  const btnSendFeedback     = document.getElementById("btn-send-feedback");

  const toastContainer    = document.getElementById("toast-container");
  const btnClearSearch = document.getElementById("btn-clear-search");
  const btnHome = document.getElementById("btn-home");
  const btnGoHomeEmpty = document.getElementById("btn-go-home-empty");

  // --- Initialize UI States ---
  updateSavedBadgeCount();

  // ==========================================================================
  // Event Listeners
  // ==========================================================================

  // 1. Category Chip Click (multi-select)
  categoryChips.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("chip-btn")) return;
    const value = target.dataset.value;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      selectedCategories = selectedCategories.filter(v => v !== value);
    } else {
      target.classList.add("active");
      selectedCategories.push(value);
      clearValidationError();
    }
    updateSearchButtonState();
  });

  // 2. Domain Chip Click (multi-select)
  domainChips.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("chip-btn")) return;
    const value = target.dataset.value;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      selectedDomains = selectedDomains.filter(v => v !== value);
    } else {
      target.classList.add("active");
      selectedDomains.push(value);
      clearValidationError();
    }
    updateSearchButtonState();
  });

  // 3. Text Input & Live Char Counter
  inputQuery.addEventListener("input", (e) => {
    let value = e.target.value;
    if (value.length > 50) {
      value = value.substring(0, 50);
      inputQuery.value = value;
    }
    queryText = value;
    charCounter.textContent = `${value.length} / 50`;
    clearValidationError();
  });

  // 4. Form Submit
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (selectedDomains.length === 0) {
      showValidationError("서비스 도메인을 선택해 주세요.");
      return;
    }
    if (selectedCategories.length === 0) {
      showValidationError("현재 프로젝트의 목적(카테고리)을 선택해 주세요.");
      return;
    }
    clearValidationError();
    performSearch();
  });

  // 5. Saved View Controls
  btnDrawer.addEventListener("click", () => {
    renderSavedCases();
    mainContainer.classList.add("hidden");
    feedbackView.classList.add("hidden");
    savedView.classList.remove("hidden");
    updateActiveMenu(btnDrawer);
  });

  // 6. Feedback View Controls
  function resetFeedbackView() {
    if (feedbackInputState) feedbackInputState.style.display = "flex";
    if (feedbackSuccessState) feedbackSuccessState.classList.add("hidden");
    if (feedbackTextarea) {
      feedbackTextarea.value = "";
      feedbackCharCount.textContent = "0";
    }
    // Reset chips
    document.querySelectorAll(".feedback-chip").forEach(chip => chip.classList.remove("active"));
    // Reset button
    if (btnSendFeedback) btnSendFeedback.disabled = true;
  }

  function updateSendButtonState() {
    const hasText = feedbackTextarea && feedbackTextarea.value.trim().length > 0;
    const hasChip = document.querySelector(".feedback-chip.active") !== null;
    if (btnSendFeedback) btnSendFeedback.disabled = !(hasText || hasChip);
  }

  if (btnFeedback) {
    btnFeedback.addEventListener("click", () => {
      mainContainer.classList.add("hidden");
      savedView.classList.add("hidden");
      feedbackView.classList.remove("hidden");
      resetFeedbackView();
      document.querySelectorAll(".header-btn").forEach(btn => btn.classList.remove("active"));
      btnFeedback.classList.add("active");
    });
  }

  // Feedback Chip Multi-Select
  document.querySelectorAll(".feedback-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("active");
      updateSendButtonState();
    });
  });

  // Feedback Textarea Char Counter
  if (feedbackTextarea) {
    feedbackTextarea.addEventListener("input", (e) => {
      let value = e.target.value;
      if (value.length > 2000) {
        value = value.substring(0, 2000);
        feedbackTextarea.value = value;
      }
      feedbackCharCount.textContent = value.length;
      updateSendButtonState();
    });
  }

  // Send Feedback Button (Mixpanel)
  if (btnSendFeedback) {
    btnSendFeedback.addEventListener("click", () => {
      const content = feedbackTextarea ? feedbackTextarea.value.trim() : "";
      const selectedChips = [...document.querySelectorAll(".feedback-chip.active")].map(c => c.dataset.value);

      // Track to Mixpanel
      mixpanel.track('Feedback_Submitted', {
        chips: selectedChips,
        feedback_content: content,
        content_length: content.length
      });

      // Show success state
      if (feedbackInputState) feedbackInputState.style.display = "none";
      if (feedbackSuccessState) feedbackSuccessState.classList.remove("hidden");
    });
  }

  function updateActiveMenu(menuBtn) {
    document.querySelectorAll(".header-btn").forEach(btn => btn.classList.remove("active"));
    if (menuBtn) menuBtn.classList.add("active");
  }

  // Overwrite existing Home/Drawer toggles to also hide feedback-view
  if (btnHome) {
    btnHome.addEventListener("click", () => {
      savedView.classList.add("hidden");
      feedbackView.classList.add("hidden");
      mainContainer.classList.remove("hidden");
      updateActiveMenu(btnHome);
    });
  }

  if (btnGoHomeEmpty) {
    btnGoHomeEmpty.addEventListener("click", () => {
      savedView.classList.add("hidden");
      feedbackView.classList.add("hidden");
      mainContainer.classList.remove("hidden");
      updateActiveMenu(btnHome);
    });
  }

  // 7. Clear Results
  btnClearSearch.addEventListener("click", resetSearchForm);

  // ==========================================================================
  // Core Search & Render
  // ==========================================================================

  function performSearch() {
    // Increment search count
    const searches = parseInt(localStorage.getItem(KEYS.TOTAL_SEARCHES) || "0") + 1;
    localStorage.setItem(KEYS.TOTAL_SEARCHES, searches.toString());

    // Mixpanel Event: Search
    mixpanel.track('Search_Performed', {
      categories: selectedCategories,
      domains: selectedDomains
    });

    // Category and Domain multi-select filtering
    let matchedCases = DESIGN_CASES.filter(c => {
      const caseCats = Array.isArray(c.문제카테고리) ? c.문제카테고리 : [c.문제카테고리];
      const matchCategory = selectedCategories.some(sel => caseCats.some(cat => cat.includes(sel)));
      const matchDomain = selectedDomains.some(sel => c.도메인 && c.도메인.includes(sel));
      return matchCategory && matchDomain;
    });

    // Relevance scoring (Query text only)
    const scoredCases = matchedCases.map(c => {
      let score = 0;
      if (queryText.trim()) {
        const words = queryText.toLowerCase().split(/\s+/).filter(w => w.length > 1);
        words.forEach(word => {
          if (c.제목.toLowerCase().includes(word)) score += 5;
          if (c.문제.toLowerCase().includes(word)) score += 4;
          if (c.결정.toLowerCase().includes(word)) score += 3;
          if (c.근거.toLowerCase().includes(word)) score += 2;
          if (c.결과.toLowerCase().includes(word)) score += 2;
        });
      }
      return { caseData: c, score };
    });

    scoredCases.sort((a, b) => b.score - a.score);
    const finalResults = scoredCases.map(item => item.caseData);

    renderResults(finalResults);
  }

  function renderResults(results) {
    casesList.innerHTML = "";

    mainContainer.classList.add("has-results");
    welcomeSection.classList.add("hidden");
    resultsHeaderLeft.classList.remove("hidden");
    rightColumn.classList.remove("hidden");
    btnClearSearch.classList.remove("hidden");

    if (results.length === 0) {
      resultsSection.classList.add("hidden");
      emptyState.classList.remove("hidden");
      resultsCountTitle.textContent = "비슷한 실제 사례가 없어요.";
      return;
    }

    emptyState.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    resultsCountTitle.innerHTML = `비슷한 실제 사례 <span style="color: var(--purple);">${results.length}건</span>을 찾았어요`;

    // Render cards
    results.forEach(c => {
      const card = createCaseCardElement(c);
      casesList.appendChild(card);
    });

    setTimeout(() => {
      rightColumn.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }

  // ==========================================================================
  // Card DOM Builders
  // ==========================================================================

  function createCaseCardElement(c) {
    const card = document.createElement("div");
    card.className = "case-card";
    card.dataset.id = c.id;
    card.style.cssText = "width: 100%; display: flex; flex-direction: column; background: transparent;";

    const adoptionLog    = getAdoptionLog();
    const currentStatus  = adoptionLog[c.id];

    // Determine Success/Fail from title
    const isFail = c.제목.includes("실패");
    const badgeText = isFail ? "실패" : "성공";
    const badgeBg = isFail ? "var(--error,#d72a2a)" : "var(--succes,#03a900)";

    const outlinkHtml = c.출처
      ? `<a href="${c.출처}" target="_blank" class="card-outlink" style="border: 1px solid var(--gray_04); border-radius: 16px; padding: 6px 10px; font-size: 12px; line-height: 18px; color: var(--gray_01); text-decoration: none;" rel="noopener noreferrer">출처 바로가기</a>`
      : "";

    const headerHtml = `
      <div style="display: flex; flex-direction: column; gap: 8px; padding: 0 0 16px 0; width: 100%; box-sizing: border-box;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="display: flex; align-items: center; justify-content: center; height: 24px; padding: 0 6px; background: ${badgeBg}; color: white; border-radius: 8px; font-size: 12px; line-height: 18px;">${badgeText}</div>
            <div style="font-size: 16px; font-weight: 400; color: var(--gray_01); letter-spacing: -0.3px; line-height: 24px;">${c.회사}</div>
          </div>
          ${outlinkHtml}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 8px;">
          <h4 style="font-size: 20px; font-weight: 600; letter-spacing: 0px; line-height: 28px; color: var(--black); margin: 0; flex: 1 0 0; word-break: break-word;">${c.제목}</h4>
          <div style="font-size: 12px; color: var(--gray_01); line-height: 18px; white-space: nowrap;">${c.날짜 || ""}</div>
        </div>
      </div>
    `;

    const titleHtml = "";

    const summaryHtml = "";

    const fallbackImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"%3E%3Crect width="800" height="400" fill="%23EEEEEE"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%23999999"%3ENo Image%3C/text%3E%3C/svg%3E';
    const imageUrl = c.이미지 || fallbackImage;
    const bookmarkIconSrc = currentStatus === "adopt" 
      ? "Icon/Property 1=Bookmark, Type=Fill.svg" 
      : "Icon/Property 1=Bookmark, Type=Line.svg";

    // Add bookmark icon over thumbnail
    const thumbnailDetailsHtml = `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 0; width: 100%; box-sizing: border-box;">
        
        <!-- Side-by-side Block -->
        <div style="display: flex; gap: 16px; width: 100%; align-items: stretch;">
          
          <!-- Thumbnail (Left, 35%) -->
          <div style="flex: 3.5; position: relative; border-radius: 12px; overflow: hidden; background: #000; aspect-ratio: 4 / 3;">
            <img src="${imageUrl}" alt="${c.제목} 썸네일" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(51, 51, 51, 0.50) 0%, rgba(51, 51, 51, 0.15) 100%); pointer-events: none; z-index: 1;"></div>
            <img src="${bookmarkIconSrc}" alt="Bookmark" class="thumbnail-bookmark-btn" data-action="${currentStatus === 'adopt' ? 'cancel' : 'adopt'}" style="position: absolute; top: 16px; right: 16px; width: 32px; height: 32px; filter: brightness(0) invert(1); cursor: pointer; z-index: 10;" />
          </div>
          
          <!-- Summary/Result Box (Right, 65%) -->
          <div style="flex: 6.5; background: var(--gray_08, #f8f9fa); border: 1px solid var(--gray_05); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 20px; box-sizing: border-box; overflow-y: auto;">
            <!-- 한 줄 요약 -->
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <div style="font-family: Pretendard; font-size: 16px; font-weight: 600; line-height: 24px; letter-spacing: -0.3px; color: var(--black, #333);">한 줄 요약</div>
              <div style="font-family: Pretendard; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: -0.3px; color: var(--black, #333); white-space: pre-wrap;">${c.요약 || "-"}</div>
            </div>
            <!-- 결과 -->
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <div style="font-family: Pretendard; font-size: 16px; font-weight: 600; line-height: 24px; letter-spacing: -0.3px; color: var(--black, #333);">결과</div>
              <div style="font-family: Pretendard; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: -0.3px; color: var(--black, #333); white-space: pre-wrap;">${c.결과 || "-"}</div>
            </div>
          </div>
          
        </div>
        
        <!-- Details Block -->
        <div style="display: flex; flex-direction: column; width: 100%; word-break: break-word;">
          <div style="display: flex; flex-direction: column; gap: 4px; padding-bottom: 8px;">
            <div style="font-weight: 600; font-size: 14px; color: var(--black); line-height: 20px;">문제</div>
            <div style="font-size: 14px; color: var(--gray_01); line-height: 20px; white-space: pre-wrap;">${c.문제 || "-"}</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px; padding: 8px 0;">
            <div style="font-weight: 600; font-size: 14px; color: var(--black); line-height: 20px;">당시 상황</div>
            <div style="font-size: 14px; color: var(--gray_01); line-height: 20px; white-space: pre-wrap;">${c.상황제약 || "-"}</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px; padding: 8px 0;">
            <div style="font-weight: 600; font-size: 14px; color: var(--black); line-height: 20px;">결정</div>
            <div style="font-size: 14px; color: var(--gray_01); line-height: 20px; white-space: pre-wrap;">${c.결정 || "-"}</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px; padding: 8px 0 0 0;">
            <div style="font-weight: 600; font-size: 14px; color: var(--black); line-height: 20px;">근거</div>
            <div style="font-size: 14px; color: var(--gray_01); line-height: 20px; white-space: pre-wrap;">${c.근거 || "-"}</div>
          </div>
          <!-- 도메인 + 프로젝트 목적 태그 -->
          <div style="display: flex; flex-direction: row; align-items: center; gap: 12px; padding-top: 12px; flex-wrap: wrap;">
            ${[
              ...getDisplayDomains(c.도메인).map(d => '#' + d),
              ...[...new Set(
                (Array.isArray(c.문제카테고리) ? c.문제카테고리 : (c.문제카테고리 ? [c.문제카테고리] : []))
                  .map(cat => getCategoryLabel(cat))
              )].map(label => '#' + label)
            ].filter(Boolean).map(tag =>
              `<span style="font-family: Pretendard; font-size: 12px; font-weight: 400; line-height: 18px; color: var(--Purple, #5D21D0);">${tag}</span>`
            ).join('')}
          </div>
        </div>
        
      </div>
    `;

    // Divider
    const dividerHtml = "";

    // Adoption buttons
    let feedbackButtonsHtml = "";
    if (currentStatus === "adopt") {
      feedbackButtonsHtml = `
        <div style="font-size: 16px; font-weight: 600; color: var(--black); letter-spacing: -0.3px; line-height: 24px;">이 사례를 보관함에 저장했어요.</div>
        <button class="btn btn-small btn-line feedback-btn" data-action="cancel" style="display: flex; gap: 4px; align-items: center; padding: 10px 16px; height: 40px; box-sizing: border-box;">
          <img src="Icon/Property 1=Bookmark, Type=Fill.svg" alt="" style="width: 20px; height: 20px;">
          <span style="font-size: 14px; font-weight: 600; line-height: 20px;">채택 취소</span>
        </button>
      `;
    } else {
      feedbackButtonsHtml = `
        <div style="font-size: 16px; font-weight: 600; color: var(--black); letter-spacing: -0.3px; line-height: 24px;">이 사례를 레퍼런스로 채택하시겠어요?</div>
        <button class="btn btn-small btn-fill feedback-btn" data-action="adopt" style="display: flex; gap: 4px; align-items: center; padding: 10px 16px; height: 40px; box-sizing: border-box;">
          <img src="Icon/Property 1=Bookmark, Type=Line.svg" alt="" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
          <span style="font-size: 14px; font-weight: 600; line-height: 20px;">채택할게요</span>
        </button>
      `;
    }

    const actionHtml = `
      <div class="card-action-area" style="padding: 24px 0 0 0; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; transition: opacity 0.3s ease;">
        ${feedbackButtonsHtml}
      </div>
    `;

    card.innerHTML = `
      <div style="border-bottom: 1px solid var(--gray_06); padding: 32px 0; width: 100%; display: flex; flex-direction: column;">
        ${headerHtml}
        ${titleHtml}
        ${summaryHtml}
        ${thumbnailDetailsHtml}
        ${dividerHtml}
        ${actionHtml}
      </div>
    `;

    card.querySelectorAll(".feedback-btn").forEach(btn => {
      btn.addEventListener("click", () => handleFeedback(c.id, btn.dataset.action));
    });

    card.querySelectorAll(".thumbnail-bookmark-btn").forEach(btn => {
      btn.addEventListener("click", () => handleFeedback(c.id, btn.dataset.action));
    });

    card.querySelectorAll(".card-outlink").forEach(link => {
      link.addEventListener("click", () => {
        mixpanel.track('Case_Clicked', {
          case_id: c.id,
          case_title: c.제목
        });
      });
    });

    if (currentStatus === "adopt") {
      // Hide action area after 3 seconds
      setTimeout(() => {
        const actionArea = card.querySelector('.card-action-area');
        if (actionArea) {
          actionArea.style.opacity = '0';
          setTimeout(() => { actionArea.style.display = 'none'; }, 300);
        }
      }, 3000);
    }

    return card;
  }

  // ==========================================================================
  // Feedback & Saved Cases
  // ==========================================================================

  function handleFeedback(caseId, action) {
    const adoptionLog = getAdoptionLog();
    const savedIds    = getSavedIds();

    if (action === "adopt") {
      if (!savedIds.includes(caseId)) {
        savedIds.push(caseId);
        localStorage.setItem(KEYS.SAVED_IDS, JSON.stringify(savedIds));
      }
      adoptionLog[caseId] = "adopt";
      localStorage.setItem(KEYS.ADOPTION_LOG, JSON.stringify(adoptionLog));
      const adoptions = parseInt(localStorage.getItem(KEYS.TOTAL_ADOPTIONS) || "0") + 1;
      localStorage.setItem(KEYS.TOTAL_ADOPTIONS, adoptions.toString());
      showToast("이 사례를 채택하고 보관함에 추가했습니다.");
      
      const caseData = DESIGN_CASES.find(c => c.id === caseId);
      mixpanel.track('Case_Adopted', {
        case_id: caseId,
        case_title: caseData ? caseData.제목 : "",
        source: savedView.classList.contains("hidden") ? "search_result" : "saved_cases"
      });
    } else if (action === "reject") {
      const idx = savedIds.indexOf(caseId);
      if (idx > -1) { savedIds.splice(idx, 1); localStorage.setItem(KEYS.SAVED_IDS, JSON.stringify(savedIds)); }
      adoptionLog[caseId] = "reject";
      localStorage.setItem(KEYS.ADOPTION_LOG, JSON.stringify(adoptionLog));
      showToast("비채택 상태로 변경되었습니다.");
    } else if (action === "cancel") {
      const idx = savedIds.indexOf(caseId);
      if (idx > -1) { savedIds.splice(idx, 1); localStorage.setItem(KEYS.SAVED_IDS, JSON.stringify(savedIds)); }
      delete adoptionLog[caseId];
      localStorage.setItem(KEYS.ADOPTION_LOG, JSON.stringify(adoptionLog));
      showToast("채택을 취소했습니다.");
    }

    updateSavedBadgeCount();
    performSearch();
    if (!savedView.classList.contains("hidden")) renderSavedCases();
  }

  function renderSavedCases() {
    savedCasesList.innerHTML = "";
    const savedIds = getSavedIds();
    if (savedIds.length === 0) { savedEmptyState.classList.remove("hidden"); return; }
    savedEmptyState.classList.add("hidden");

    savedIds.forEach(id => {
      const caseData = DESIGN_CASES.find(c => c.id === id);
      if (!caseData) return;

      const savedCard = document.createElement("div");
      savedCard.className = "saved-card";

      const fallbackImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="410" height="232" viewBox="0 0 410 232"%3E%3Crect width="410" height="232" fill="%23EEEEEE"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23999999"%3ENo Image%3C/text%3E%3C/svg%3E';
      const imageUrl = caseData.이미지 || fallbackImage;
      
      const isFail = caseData.제목.includes("실패");
      const badgeText = isFail ? "실패" : "성공";
      const badgeClass = isFail ? "badge-fail" : "badge-success";
      
      // Parse tags: domain (valid only) + categories (deduped)
      const domainTags = getDisplayDomains(caseData.도메인).map(d => '#' + d);
      const catTags = [...new Set(
        (Array.isArray(caseData.문제카테고리)
          ? caseData.문제카테고리
          : (caseData.문제카테고리 ? [caseData.문제카테고리] : []))
          .map(cat => getCategoryLabel(cat))
      )].map(label => '#' + label);
      const allTags = [...domainTags, ...catTags].filter(Boolean);

      const tagsHtml = allTags.map(t => `
        <div style="display: flex; align-items: center; justify-content: center;">
          <p style="font-family: Pretendard; font-size: 12px; font-weight: 400; line-height: 18px; color: var(--Purple, #5D21D0);">${t}</p>
        </div>
      `).join("");

      const summaryContent = caseData.요약 || "-";
      const summaryHtml = caseData.출처 
        ? `<a href="${caseData.출처}" target="_blank" rel="noopener noreferrer" class="saved-card-summary saved-card-summary-link" style="text-decoration: none; color: inherit; display: block; cursor: pointer;">${summaryContent}</a>`
        : `<div class="saved-card-summary">${summaryContent}</div>`;

      savedCard.innerHTML = `
        <div class="saved-card-thumbnail">
          <img src="${imageUrl}" alt="${caseData.제목} 썸네일" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
          <img src="Icon/Property 1=Bookmark, Type=Fill.svg" alt="북마크 해제" class="bookmark-icon btn-remove-saved" data-id="${caseData.id}" style="filter: brightness(0) invert(1); z-index: 2;" />
        </div>
        <div class="saved-card-content">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div class="saved-card-header">
              <div class="status-badge ${badgeClass}">${badgeText}</div>
              <div class="saved-card-company">${caseData.회사}</div>
            </div>
            <div class="saved-card-title" style="margin-bottom: 0;">${caseData.제목}</div>
          </div>
          ${summaryHtml}
          <div class="saved-card-meta">
            <div class="saved-card-tags">
              ${tagsHtml}
            </div>
          </div>
        </div>
      `;

      savedCard.querySelectorAll(".btn-remove-saved").forEach(btn => {
        btn.addEventListener("click", () => handleFeedback(caseData.id, "cancel"));
      });

      savedCard.querySelectorAll(".saved-card-summary-link").forEach(link => {
        link.addEventListener("click", () => {
          mixpanel.track('Case_Clicked', {
            case_id: caseData.id,
            case_title: caseData.제목
          });
        });
      });

      savedCasesList.appendChild(savedCard);
    });
  }

  // ==========================================================================
  // Statistics Modal Removed
  // ==========================================================================

  // ==========================================================================
  // LocalStorage Helpers & Utils
  // ==========================================================================

  function initSessionAndStats() {
    if (!localStorage.getItem(KEYS.FIRST_VISIT)) {
      const now = new Date();
      localStorage.setItem(KEYS.FIRST_VISIT, `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`);
      localStorage.setItem(KEYS.VISIT_COUNT, "1");
    } else {
      if (!sessionStorage.getItem("casebook_session_active")) {
        sessionStorage.setItem("casebook_session_active", "true");
        const visits = parseInt(localStorage.getItem(KEYS.VISIT_COUNT) || "1") + 1;
        localStorage.setItem(KEYS.VISIT_COUNT, visits.toString());
      }
    }
    if (!localStorage.getItem(KEYS.TOTAL_SEARCHES))  localStorage.setItem(KEYS.TOTAL_SEARCHES, "0");
    if (!localStorage.getItem(KEYS.TOTAL_ADOPTIONS)) localStorage.setItem(KEYS.TOTAL_ADOPTIONS, "0");
    if (!localStorage.getItem(KEYS.SAVED_IDS))       localStorage.setItem(KEYS.SAVED_IDS, "[]");
    if (!localStorage.getItem(KEYS.ADOPTION_LOG))    localStorage.setItem(KEYS.ADOPTION_LOG, "{}");
  }

  function getSavedIds() {
    try { return JSON.parse(localStorage.getItem(KEYS.SAVED_IDS) || "[]"); } catch { return []; }
  }

  function getAdoptionLog() {
    try { return JSON.parse(localStorage.getItem(KEYS.ADOPTION_LOG) || "{}"); } catch { return {}; }
  }

  function updateSavedBadgeCount() {
    const count = getSavedIds().length;
    savedCountBadge.textContent = count;
    if (count === 0) {
      savedCountBadge.style.display = "none";
    } else {
      savedCountBadge.style.display = "inline-block";
    }
  }

  function resetSearchForm() {
    selectedCategories = [];
    selectedDomains    = [];
    queryText          = "";
    categoryChips.querySelectorAll(".chip-btn").forEach(btn => btn.classList.remove("active"));
    domainChips.querySelectorAll(".chip-btn").forEach(btn => btn.classList.remove("active"));
    inputQuery.value        = "";
    charCounter.textContent = "0 / 50";
    clearValidationError();
    
    updateSearchButtonState();
  }

  function showValidationError(message) {
    validationMsg.textContent = message;
    validationMsg.style.visibility = "visible";
  }

  function clearValidationError() {
    validationMsg.textContent = "";
    validationMsg.style.visibility = "hidden";
  }

  function showToast(message) {
    let toast = document.getElementById("global-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "global-toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add("show");
    
    // Clear any existing timeout
    if (toast.hideTimeout) clearTimeout(toast.hideTimeout);
    
    toast.hideTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
