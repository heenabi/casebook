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

// 결과 텍스트를 분석해 성공/실패/진행중을 판단하는 함수
function getResultType(c) {
  const 결과 = (c.결과 || "").trim();
  const 제목 = (c.제목 || "").trim();
  const text = 결과 + " " + 제목;

  // 성공 키워드: 최종 결과가 긍정적인 수치/표현
  const 성공키워드 = [
    "상승", "증가", "단축", "향상", "확보", "성공", "줄었", "줄어",
    "높아", "늘어", "개선됐", "개선되었", "줄이", "낮아졌", "감소"
  ];
  // 실패 키워드: 최종 결과가 부정적인 표현 (단, '실패율 감소'처럼 개선 맥락은 제외)
  const 실패키워드 = [
    "전환율은 소폭 감소", "전환율 하락", "실패로 끝", "성과 없음",
    "효과 없음", "효과가 없", "기각", "보장하지 못함"
  ];

  // 실패 판단 (부정적 결과 명시)
  for (const kw of 실패키워드) {
    if (결과.includes(kw)) return "실패";
  }

  // 성공 판단 (긍정적 결과 명시)
  for (const kw of 성공키워드) {
    if (결과.includes(kw)) return "성공";
  }

  // 명확하지 않으면 진행중
  return "진행중";
}

function generateCardHTML(c, currentStatus) {
  const resultType = getResultType(c);
  const badgeText = resultType;
  const badgeBg = resultType === "성공" ? "var(--succes,#03a900)"
    : resultType === "실패" ? "var(--error,#d72a2a)"
    : "var(--gray_02,#999)";

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="pointer-events:none;flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99902 10.1C1.99902 9.49249 2.49151 9 3.09902 9H7.89902C8.50654 9 8.99902 9.49249 8.99902 10.1V18.9C8.99902 19.5075 8.50654 20 7.89902 20H3.09902C2.49151 20 1.99902 19.5075 1.99902 18.9V10.1ZM3.99902 11V18H6.99902V11H3.99902Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8667 5.22921L10.853 11.0268C10.6475 11.3236 10.3095 11.5007 9.94858 11.5007H9.00098V17.2799L12.6633 18.5007H18.3633C18.5368 18.4445 18.619 18.3807 18.6557 18.3444C18.6963 18.3044 18.7227 18.2579 18.7388 18.1875C18.7796 18.0087 18.7352 17.7343 18.6297 17.4971C18.3913 16.9608 18.6163 16.3637 19.084 16.0899C19.1067 16.0766 19.12 16.0662 19.127 16.0599C19.1275 16.0542 19.1277 16.0453 19.1268 16.0332C19.125 16.01 19.1196 15.9852 19.1127 15.9643C18.8958 15.3086 19.3226 14.6125 19.9999 14.5042C20.0002 14.5024 20.0005 14.5008 20.0007 14.4993C20.0014 14.4939 20.001 14.4939 20.001 14.5007C20.001 14.315 19.9601 14.2215 19.9338 14.1759C19.9043 14.1248 19.8601 14.0776 19.7905 14.0284C19.519 13.8366 19.4042 13.5747 19.3577 13.3999C19.3102 13.2211 19.3104 13.054 19.3273 12.9211C19.3444 12.7859 19.3844 12.6399 19.4564 12.4984C19.5226 12.3683 19.6497 12.1767 19.878 12.0362C19.8924 12.0207 20.001 11.8973 20.001 11.5007C20.001 11.13 19.8429 10.9277 19.5644 10.7672C19.2361 10.5781 18.7964 10.5007 18.501 10.5007H15.1487C14.3705 10.5007 13.8383 9.7147 14.1274 8.99215L15.0725 6.62929C15.3552 5.92258 15.2005 5.59886 15.085 5.44159C15.027 5.36256 14.9517 5.29125 14.8667 5.22921ZM13.6414 3.48549C13.8852 3.13336 14.3321 2.93385 14.791 3.04041C15.3617 3.17292 16.161 3.52787 16.697 4.2578C17.2842 5.05732 17.4267 6.12898 16.9295 7.37207L16.478 8.50068H18.501C19.0389 8.50068 19.8492 8.62323 20.5626 9.03415C21.3257 9.47371 22.001 10.2713 22.001 11.5007C22.001 12.0794 21.8698 12.6277 21.5984 13.0665C21.8348 13.4276 22.001 13.8975 22.001 14.5007C22.001 14.8084 21.9219 15.23 21.675 15.6178C21.5393 15.8308 21.3557 16.0272 21.1235 16.1804C21.1163 16.2964 21.0994 16.4164 21.0698 16.5385C21.0014 16.8209 20.8706 17.092 20.6719 17.3314C20.7602 17.7192 20.7937 18.1726 20.6886 18.6328C20.5981 19.0287 20.4038 19.4292 20.0605 19.768C19.7197 20.1043 19.278 20.3347 18.7602 20.4666C18.6726 20.4889 18.5812 20.5007 18.4887 20.5007H12.5172C12.399 20.5007 12.2815 20.4816 12.1694 20.4442L7.75313 18.9722C7.30395 18.8224 7.00098 18.4021 7.00098 17.9286V10.6007C7.00098 9.99317 7.49346 9.50068 8.10098 9.50068H9.47702L13.6414 3.48549Z" fill="#333333"/></svg>
              </div>
              <div class="vote-btn unhelpful-btn" data-id="${c.id}" data-title="${c.제목}" style="border: 1px solid var(--gray_05,#ddd); border-radius: 8px; display: flex; gap: 8px; align-items: center; justify-content: center; padding: 8px 16px; cursor: pointer; width: 114px; box-sizing: border-box; transition: opacity 0.3s ease;">
                <span style="font-family: Pretendard; font-size: 14px; font-weight: 500; line-height: 20px; color: var(--ft_default,#313741); white-space: nowrap;">어려워요</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="pointer-events:none;flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99902 14.3992C1.99902 15.0067 2.49151 15.4992 3.09902 15.4992H7.89902C8.50654 15.4992 8.99902 15.0067 8.99902 14.3992V5.59922C8.99902 4.99171 8.50654 4.49922 7.89902 4.49922H3.09902C2.49151 4.49922 1.99902 4.99171 1.99902 5.59922V14.3992ZM3.99902 13.4992V6.49922H6.99902V13.4992H3.99902Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8667 19.27L10.853 13.4724C10.6475 13.1756 10.3095 12.9985 9.94858 12.9985H9.00098V7.2193L12.6633 5.99854H18.3633C18.5368 6.05469 18.619 6.11853 18.6557 6.15479C18.6963 6.19483 18.7227 6.24134 18.7388 6.31171C18.7796 6.49051 18.7352 6.76492 18.6297 7.00214C18.3913 7.53839 18.6163 8.13551 19.084 8.4093C19.1067 8.4226 19.12 8.43305 19.127 8.43933C19.1275 8.44504 19.1277 8.45388 19.1268 8.46605C19.125 8.4892 19.1196 8.51399 19.1127 8.53494C18.8958 9.19066 19.3226 9.88673 19.9999 9.99506C20.0002 9.99682 20.0005 9.99844 20.0007 9.9999C20.0014 10.0054 20.001 10.0053 20.001 9.99854C20.001 10.1842 19.9601 10.2777 19.9338 10.3234C19.9043 10.3745 19.8601 10.4216 19.7905 10.4708C19.519 10.6627 19.4042 10.9246 19.3577 11.0993C19.3102 11.2781 19.3104 11.4452 19.3273 11.5781C19.3444 11.7133 19.3844 11.8593 19.4564 12.0009C19.5226 12.1309 19.6497 12.3225 19.878 12.4631C19.8924 12.4785 20.001 12.6019 20.001 12.9985C20.001 13.3692 19.8429 13.5716 19.5644 13.732C19.2361 13.9211 18.7964 13.9985 18.501 13.9985H15.1487C14.3705 13.9985 13.8383 14.7845 14.1274 15.5071L15.0725 17.8699C15.3552 18.5766 15.2005 18.9004 15.085 19.0576C15.027 19.1367 14.9517 19.208 14.8667 19.27ZM13.6414 21.0137C13.8852 21.3659 14.3321 21.5654 14.791 21.4588C15.3617 21.3263 16.161 20.9714 16.697 20.2414C17.2842 19.4419 17.4267 18.3702 16.9295 17.1272L16.478 15.9985H18.501C19.0389 15.9985 19.8492 15.876 20.5626 15.4651C21.3257 15.0255 22.001 14.2279 22.001 12.9985C22.001 12.4198 21.8698 11.8715 21.5984 11.4328C21.8348 11.0716 22.001 10.6018 22.001 9.99854C22.001 9.69082 21.9219 9.26925 21.675 8.88146C21.5393 8.66841 21.3557 8.47201 21.1235 8.31879C21.1163 8.20279 21.0994 8.08285 21.0698 7.9607C21.0014 7.67832 20.8706 7.40721 20.6719 7.1678C20.7602 6.78004 20.7937 6.32666 20.6886 5.86646C20.5981 5.47049 20.4038 5.06998 20.0605 4.73123C19.7197 4.39489 19.278 4.16456 18.7602 4.0326C18.6726 4.01029 18.5812 3.99854 18.4887 3.99854H12.5172C12.399 3.99854 12.2815 4.0176 12.1694 4.05499L7.75313 5.52707C7.30395 5.67679 7.00098 6.09715 7.00098 6.57062V13.8985C7.00098 14.5061 7.49346 14.9985 8.10098 14.9985H9.47702L13.6414 21.0137Z" fill="#333333"/></svg>
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
  const resultType = getResultType(c);
  const badgeText = resultType;
  const badgeBg = resultType === "성공" ? "var(--succes,#03a900)"
    : resultType === "실패" ? "var(--error,#d72a2a)"
    : "var(--gray_02,#999)";

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
    <div style="display: flex; flex-direction: column; width: 100%; align-items: flex-start; background: transparent; padding-bottom: 24px; border-bottom: 1px solid var(--gray_06,#eee); height: 100%; box-sizing: border-box; justify-content: space-between;">
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
          ${c.출처 && c.출처.trim().startsWith("http")
            ? `<a href="${c.출처.trim()}" target="_blank" rel="noopener noreferrer" class="saved-card-title-link" style="font-family: Pretendard; font-size: 20px; font-weight: 600; line-height: 28px; color: var(--ft_title,#1c1e22); margin: 0; flex: 1; word-break: break-word; text-decoration: none; cursor: pointer;">${c.제목}</a>`
            : `<h4 style="font-family: Pretendard; font-size: 20px; font-weight: 600; line-height: 28px; color: var(--ft_title,#1c1e22); margin: 0; flex: 1; word-break: break-word;">${c.제목}</h4>`
          }
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
