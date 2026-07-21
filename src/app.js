import { DESIGN_CASES, STATIC_CASES_COPY } from "./cases-data.js?v=2";
import mixpanel from "mixpanel-browser";
import { MIXPANEL_TOKEN } from "./config.js";

// Initialize Mixpanel
mixpanel.init(MIXPANEL_TOKEN, { debug: false, track_pageview: true, persistence: 'localStorage' });

// Track Initial Page View for retention
mixpanel.track('Page_View');

// ==========================================================================
// Casebook Application Logic
// ==========================================================================

const initApp = () => {
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

function generateCardHTML(c, currentStatus) {
  const isFail = c.제목.includes("실패");
  const badgeText = isFail ? "실패" : "성공";
  const badgeBg = isFail ? "var(--error,#d72a2a)" : "var(--succes,#03a900)";

  const tagsList = [
    ...getDisplayDomains(c.도메인).map(d => '#' + d),
    ...[...new Set(
      (Array.isArray(c.문제카테고리) ? c.문제카테고리 : (c.문제카테고리 ? [c.문제카테고리] : []))
        .map(cat => getCategoryLabel(cat))
    )].map(label => '#' + label)
  ].filter(Boolean);

  const tagsHtml = tagsList.map(tag => 
    `<div style="display: flex; flex-direction: column; justify-content: center; flex-shrink: 0;"><p style="font-family: Pretendard; font-size: 12px; font-weight: 400; line-height: 18px; color: var(--gray_01,#666); margin: 0;">${tag}</p></div>`
  ).join('');

  const isValidSource = c.출처 && c.출처.trim().startsWith("http");
  const outlinkHtml = isValidSource
    ? `<a href="${c.출처.trim()}" target="_blank" class="card-outlink" style="border: 1px solid var(--gray_03,#bbb); border-radius: 16px; padding: 6px 12px; display: flex; align-items: center; justify-content: center; text-decoration: none; flex-shrink: 0;" rel="noopener noreferrer"><span style="font-family: Pretendard; font-size: 14px; font-weight: 400; line-height: 20px; color: var(--black,#333); white-space: nowrap;">출처 바로가기</span></a>`
    : "";

  const isBookmarked = currentStatus === "adopt";
  const bookmarkText = isBookmarked ? "이 사례를 레퍼런스로 보관하셨어요." : "이 사례를 레퍼런스로 보관하시겠어요?";
  const bookmarkBtnText = isBookmarked ? "보관취소" : "보관할게요";
  const bookmarkIconName = isBookmarked ? "Icon/Property 1=Bookmark, Type=Fill.svg" : "Icon/Property 1=Bookmark, Type=Line.svg";

  return `
    <div style="display: flex; flex-direction: column; width: 100%; align-items: flex-start; background: transparent;">
      <div style="display: flex; flex-direction: column; padding: 32px 0 0 0; width: 100%; border-bottom: 1px solid var(--gray_06,#eee); align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 10px; padding: 0 24px; width: 100%; align-items: flex-start; box-sizing: border-box;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="background: ${badgeBg}; border-radius: 8px; padding: 6px; display: flex; align-items: center; justify-content: center; height: 24px; box-sizing: border-box;">
                <span style="font-family: Pretendard; font-size: 12px; font-weight: 400; line-height: 18px; color: white; white-space: nowrap;">${badgeText}</span>
              </div>
              <span style="font-family: Pretendard; font-size: 16px; font-weight: 400; line-height: 24px; color: var(--gray_01,#666); letter-spacing: -0.3px; white-space: nowrap;">${c.회사}</span>
              <div style="width: 1px; height: 12px; background: var(--gray_04,#ccc); border-radius: 1px; flex-shrink: 0;"></div>
              <div style="display: flex; align-items: center; gap: 8px;">
                ${tagsHtml}
              </div>
            </div>
            <span style="font-family: Pretendard; font-size: 12px; font-weight: 400; line-height: 18px; color: var(--gray_01,#666); white-space: nowrap;">${c.날짜 || ""}</span>
          </div>
          <div style="display: flex; align-items: center; width: 100%; gap: 8px; padding-bottom: 16px;">
            <h4 style="font-family: Pretendard; font-size: 20px; font-weight: 600; line-height: 28px; color: var(--ft_title,#1c1e22); margin: 0; flex: 1; word-break: break-word;">${c.제목}</h4>
            ${outlinkHtml}
          </div>
        </div>

        <div style="display: flex; padding: 16px 24px; width: 100%; box-sizing: border-box; align-items: flex-start;">
          <div style="display: flex; flex-direction: column; gap: 20px; padding: 16px; border: 1px solid var(--gray_05,#ddd); border-radius: 12px; width: 100%; box-sizing: border-box;">
            <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <span style="font-family: Pretendard; font-size: 16px; font-weight: 600; line-height: 24px; color: var(--black,#333); white-space: nowrap;">한 줄 요약</span>
                <span style="font-family: Pretendard; font-size: 16px; font-weight: 400; line-height: 24px; color: var(--black,#333); white-space: pre-wrap;">${c.요약 || "-"}</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <span style="font-family: Pretendard; font-size: 16px; font-weight: 600; line-height: 24px; color: var(--black,#333); white-space: nowrap;">결과</span>
                <span style="font-family: Pretendard; font-size: 16px; font-weight: 400; line-height: 24px; color: var(--black,#333); white-space: pre-wrap;">${c.결과 || "-"}</span>
              </div>
            </div>
            <div style="display: flex; gap: 12px; align-items: flex-start; position: relative; height: 42px; overflow: hidden; transition: all 0.4s ease;" class="reaction-container">
              <div class="vote-btn helpful-btn" data-id="${c.id}" data-title="${c.제목}" style="border: 1px solid var(--gray_05,#ddd); border-radius: 8px; display: flex; gap: 8px; align-items: center; justify-content: center; padding: 8px 16px; cursor: pointer; width: 114px; box-sizing: border-box; transition: opacity 0.3s ease;">
                <span style="font-family: Pretendard; font-size: 14px; font-weight: 500; line-height: 20px; color: var(--ft_default,#313741); white-space: nowrap;">도움돼요</span>
                <img src="Icon/Property 1=like, Type=Line.svg" alt="도움돼요" style="width: 24px; height: 24px; pointer-events: none;" />
              </div>
              <div class="vote-btn unhelpful-btn" data-id="${c.id}" data-title="${c.제목}" style="border: 1px solid var(--gray_05,#ddd); border-radius: 8px; display: flex; gap: 8px; align-items: center; justify-content: center; padding: 8px 16px; cursor: pointer; width: 114px; box-sizing: border-box; transition: opacity 0.3s ease;">
                <span style="font-family: Pretendard; font-size: 14px; font-weight: 500; line-height: 20px; color: var(--ft_default,#313741); white-space: nowrap;">어려워요</span>
                <img src="Icon/Property 1=dislike, Type=Line.svg" alt="어려워요" style="width: 24px; height: 24px; pointer-events: none;" />
              </div>
              <div class="vote-feedback" style="opacity: 0; pointer-events: none; position: absolute; left: 0; top: 0; display: flex; align-items: center; height: 100%; transition: opacity 0.3s ease;">
                <span style="font-family: Pretendard; font-size: 14px; font-weight: 500; color: var(--black,#333);">소중한 의견 감사합니다</span>
              </div>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; width: 100%; padding: 0 24px 16px 24px; box-sizing: border-box;">
          <div style="display: flex; flex-direction: column; width: 100%;">
            <div style="display: flex; flex-direction: column; gap: 4px; padding-bottom: 8px;">
              <span style="font-family: Pretendard; font-size: 14px; font-weight: 600; color: var(--black,#333); line-height: 20px;">문제</span>
              <span style="font-family: Pretendard; font-size: 14px; font-weight: 400; color: var(--gray_01,#666); line-height: 20px; white-space: pre-wrap;">${c.문제 || "-"}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px; padding: 8px 0;">
              <span style="font-family: Pretendard; font-size: 14px; font-weight: 600; color: var(--black,#333); line-height: 20px;">당시 상황</span>
              <span style="font-family: Pretendard; font-size: 14px; font-weight: 400; color: var(--gray_01,#666); line-height: 20px; white-space: pre-wrap;">${c.상황제약 || "-"}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px; padding: 8px 0;">
              <span style="font-family: Pretendard; font-size: 14px; font-weight: 600; color: var(--black,#333); line-height: 20px;">결정</span>
              <span style="font-family: Pretendard; font-size: 14px; font-weight: 400; color: var(--gray_01,#666); line-height: 20px; white-space: pre-wrap;">${c.결정 || "-"}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px; padding-top: 8px;">
              <span style="font-family: Pretendard; font-size: 14px; font-weight: 600; color: var(--black,#333); line-height: 20px;">근거</span>
              <span style="font-family: Pretendard; font-size: 14px; font-weight: 400; color: var(--gray_01,#666); line-height: 20px; white-space: pre-wrap;">${c.근거 || "-"}</span>
            </div>
          </div>
        </div>

        <div style="height: 1px; background: var(--gray_06,#eee); width: 100%;"></div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 32px; width: 100%; box-sizing: border-box;">
          <p style="font-family: Pretendard; font-size: 16px; font-weight: 600; line-height: 24px; color: var(--black,#333); letter-spacing: -0.3px; margin: 0; white-space: nowrap;">${bookmarkText}</p>
          <div class="thumbnail-bookmark-btn bottom-bookmark-btn" data-id="${c.id}" data-action="${isBookmarked ? 'cancel' : 'adopt'}" style="background: var(--purple,#5d21d0); border-radius: 8px; display: flex; gap: 4px; align-items: center; justify-content: center; height: 40px; padding: 16px; cursor: pointer; flex-shrink: 0; box-sizing: border-box;">
            <img src="${bookmarkIconName}" style="width: 20px; height: 20px; filter: brightness(0) invert(1); pointer-events: none;" alt="보관" />
            <span style="font-family: Pretendard; font-size: 14px; font-weight: 600; line-height: 20px; color: var(--gray_08,#f9f9f9); white-space: nowrap;">${bookmarkBtnText}</span>
          </div>
        </div>

      </div>
    </div>
  `;
}


function generateSavedCardHTML(c) {
  const isFail = c.제목.includes("실패");
  const badgeText = isFail ? "실패" : "성공";
  const badgeBg = isFail ? "var(--error,#d72a2a)" : "var(--succes,#03a900)";

  const tagsList = [
    ...getDisplayDomains(c.도메인).map(d => '#' + d),
    ...[...new Set(
      (Array.isArray(c.문제카테고리) ? c.문제카테고리 : (c.문제카테고리 ? [c.문제카테고리] : []))
        .map(cat => getCategoryLabel(cat))
    )].map(label => '#' + label)
  ].filter(Boolean);

  const tagsHtml = tagsList.map(tag => 
    `<div style="display: flex; flex-direction: column; justify-content: center; flex-shrink: 0;"><p style="font-family: Pretendard; font-size: 12px; font-weight: 400; line-height: 18px; color: var(--gray_01,#666); margin: 0;">${tag}</p></div>`
  ).join('');

  return `
    <div style="display: flex; flex-direction: column; width: 100%; align-items: flex-start; background: transparent; padding-bottom: 24px; border-bottom: 1px solid var(--gray_06,#eee);">
      <div style="display: flex; flex-direction: column; gap: 10px; width: 100%; align-items: flex-start; box-sizing: border-box;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <div style="background: ${badgeBg}; border-radius: 8px; padding: 6px; display: flex; align-items: center; justify-content: center; height: 24px; box-sizing: border-box;">
              <span style="font-family: Pretendard; font-size: 12px; font-weight: 400; line-height: 18px; color: white; white-space: nowrap;">${badgeText}</span>
            </div>
            <span style="font-family: Pretendard; font-size: 14px; font-weight: 400; line-height: 20px; color: var(--gray_01,#666); letter-spacing: -0.3px; white-space: nowrap;">${c.회사}</span>
            <div style="width: 1px; height: 12px; background: var(--gray_04,#ccc); border-radius: 1px; flex-shrink: 0;"></div>
            <div style="display: flex; align-items: center; gap: 8px;">
              ${tagsHtml}
            </div>
          </div>
          <div class="thumbnail-bookmark-btn" data-id="${c.id}" data-action="cancel" style="cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center;">
            <img src="Icon/Property 1=Bookmark, Type=Fill.svg" style="width: 24px; height: 24px; pointer-events: none;" alt="보관취소" />
          </div>
        </div>
        <div style="display: flex; align-items: center; width: 100%; gap: 8px; padding-bottom: 16px;">
          <h4 style="font-family: Pretendard; font-size: 20px; font-weight: 600; line-height: 28px; color: var(--ft_title,#1c1e22); margin: 0; flex: 1; word-break: break-word;">${c.제목}</h4>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; box-sizing: border-box;">
        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <span style="font-family: Pretendard; font-size: 16px; font-weight: 600; line-height: 24px; color: var(--black,#333); white-space: nowrap;">한 줄 요약</span>
            <span style="font-family: Pretendard; font-size: 16px; font-weight: 400; line-height: 24px; color: var(--black,#333); white-space: pre-wrap;">${c.요약 || "-"}</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <span style="font-family: Pretendard; font-size: 16px; font-weight: 600; line-height: 24px; color: var(--black,#333); white-space: nowrap;">결과</span>
            <span style="font-family: Pretendard; font-size: 16px; font-weight: 400; line-height: 24px; color: var(--black,#333); white-space: pre-wrap;">${c.결과 || "-"}</span>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: flex-start; width: 100%; margin-top: 16px;">
        <span style="font-family: Pretendard; font-size: 12px; font-weight: 400; line-height: 18px; color: var(--gray_01,#666); white-space: nowrap;">${c.날짜 || ""}</span>
      </div>
    </div>
  `;
}

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
  
  const brandLogo = document.getElementById("brand-logo");
  if (brandLogo) {
    brandLogo.addEventListener("click", () => {
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

  async function performSearch() {
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

    const adoptionLog = getAdoptionLog();
    const currentStatus = adoptionLog[c.id];

    card.innerHTML = generateCardHTML(c, currentStatus);

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

    // Reaction buttons
    card.querySelectorAll(".vote-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.classList.contains("helpful-btn") ? "도움돼요" : "어려워요";
        mixpanel.track("Reaction Clicked", { type: type, caseId: c.id, caseTitle: c.제목 });
        
        const container = btn.closest(".reaction-container");
        const allBtns = container.querySelectorAll(".vote-btn");
        const feedbackText = container.querySelector(".vote-feedback");
        
        allBtns.forEach(b => {
          b.style.pointerEvents = "none";
          b.style.opacity = "0";
        });
        feedbackText.style.opacity = "1";
        
        setTimeout(() => {
          container.style.height = "0px";
          container.style.opacity = "0";
          container.style.marginTop = "-20px"; // counteracts the gap: 20px of the parent flex
          setTimeout(() => {
            container.style.display = "none";
          }, 400);
        }, 3000);
      });
    });

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

  function getValidSavedIds() {
    let savedIds = getSavedIds();
    let updated = false;
    let validIds = [];

    savedIds.forEach(id => {
      let caseData = DESIGN_CASES.find(c => c.id === id || String(c.id) === String(id));
      
      // Fallback for UUID mismatch
      if (!caseData) {
        const oldStaticCase = STATIC_CASES_COPY.find(c => String(c.id) === String(id));
        if (oldStaticCase) {
          // Try exact title match
          caseData = DESIGN_CASES.find(c => c.제목 === oldStaticCase.제목);
          
          // Try fuzzy title match (in case Claude slightly modified it)
          if (!caseData) {
            const clean = str => str.replace(/\s+/g, '').toLowerCase();
            const oldTitle = clean(oldStaticCase.제목);
            caseData = DESIGN_CASES.find(c => {
               const newTitle = clean(c.제목);
               return newTitle.includes(oldTitle) || oldTitle.includes(newTitle);
            });
          }
        }
      }

      if (caseData) {
        if (String(caseData.id) !== String(id)) updated = true;
        validIds.push(caseData.id);
      } else {
        updated = true; // Orphaned ID to be removed
      }
    });

    validIds = [...new Set(validIds)]; // dedup
    if (updated) localStorage.setItem(KEYS.SAVED_IDS, JSON.stringify(validIds));
    return validIds;
  }

  function renderSavedCases() {
    savedCasesList.innerHTML = "";
    const savedIds = getValidSavedIds();
    
    let renderedCount = 0;
    savedIds.forEach(id => {
      let caseData = DESIGN_CASES.find(c => String(c.id) === String(id));
      if (!caseData) return;
      renderedCount++;

      const savedCard = document.createElement("div");
      savedCard.className = "saved-card";

      const adoptionLog = getAdoptionLog();
      const currentStatus = adoptionLog[caseData.id];
      savedCard.innerHTML = generateSavedCardHTML(caseData);
      savedCard.dataset.id = caseData.id;

      savedCard.querySelectorAll(".thumbnail-bookmark-btn").forEach(btn => {
        btn.addEventListener("click", () => handleFeedback(caseData.id, btn.dataset.action));
      });

      savedCard.querySelectorAll(".card-outlink").forEach(link => {
        link.addEventListener("click", () => {
          mixpanel.track('Case_Clicked', {
            case_id: caseData.id,
            case_title: caseData.제목
          });
        });
      });


      savedCasesList.appendChild(savedCard);
    });

    if (renderedCount === 0) {
      savedEmptyState.style.display = "flex";
      savedCasesList.style.display = "none";
    } else {
      savedEmptyState.style.display = "none";
      savedCasesList.style.display = "grid";
    }
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
    const count = getValidSavedIds().length;
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
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
