// 실제 디자인 사례 DB — CSV에서 변환된 정적 데이터 (총 22건)
let STATIC_CASES = [
  {
    "id": "3d23fa5c-360a-8147-b5d6-c66881c1213f",
    "제목": "팀스파르타 STACK 디자인시스템 MCP: AI가 못 읽는 20% 좁히기",
    "회사": "팀스파르타",
    "도메인": "에듀테크, B2C",
    "문제카테고리": [
      "디자인시스템"
    ],
    "상황제약": "5개 브랜드가 함께 쓰는 시스템이라 확장성이 최우선이었고, Figma와 코드의 속성명을 1:1로 맞추려면 코드 전체를 바꿔야 해 현실적으로 어려웠습니다.",
    "요약": "MCP로 UI 마크업 70~80%가 자동 생성됐지만 나머지 20%에서 AI가 규칙을 벗어나, 디자인시스템 자체를 AI 친화적으로 바꾸어 간극을 좁힌 사례입니다.",
    "문제": "개발자들이 이미 MCP를 쓰고 있었지만, AI가 불필요한 컴포넌트를 새로 만들고 Figma의 color와 코드의 colorScheme을 다르게 인식했으며 주석에 담긴 반응형 의도를 읽지 못했습니다.",
    "결정": "코드를 쓰기 전 MCP로 실제 스펙을 확인하게 하는 Claude 스킬을 만들고, 코드는 그대로 둔 채 스킬에 네이밍 매핑을 넣었으며, 주석 없이도 의도가 전달되도록 핸드오프 가이드를 정비했습니다.",
    "근거": "개발자 11명 전원이 이미 Figma MCP를 쓰고 있어 변화를 시스템 쪽에서 받아내야 한다고 봤고, 규칙이 늘면 디자이너 부담도 커지므로 품질에 실제 영향을 주는 것만 가이드로 만들었습니다.",
    "결과": "UI 마크업의 70~80%가 자동 생성되고 단순 마크업 시간이 50% 이상 줄었으며 타입 오류와 하드코딩도 크게 줄었지만, 버튼 색상 오적용과 아이콘 누락은 남았습니다.",
    "출처": "https://brunch.co.kr/@8a0100de7ca0488/13",
    "날짜": "2026-03-24",
    "이미지": "./images/3d23fa5c-360a-8147-b5d6-c66881c1213f.png"
  },
  {
    "id": "3d23fa5c-360a-81b8-88ec-e9fde7befa10",
    "제목": "팀스파르타 Stack Canvas: 개발이 빨라지자 병목이 된 디자인 단계 풀기",
    "회사": "팀스파르타",
    "도메인": "에듀테크, B2C",
    "문제카테고리": [
      "디자인시스템"
    ],
    "상황제약": "디자이너가 가장 효율적인 공간은 여전히 피그마라 도구를 바꿀 수 없었고, 시중 AI 도구는 비슷하게 그려줄 뿐 실제 라이브러리 컴포넌트를 쓰지 못했습니다.",
    "요약": "MCP로 개발이 빨라지자 디자인이 병목이 돼, 디자인시스템 컴포넌트를 Figma에 직접 배치해주는 Stack Canvas를 4일 만에 만든 사례입니다.",
    "문제": "개발이 빨라진 만큼 태스크가 쌓여 디자인 단계가 병목이 됐고, 코드 프로토타입은 여러 안을 나란히 놓고 비교하기엔 너무 무거웠습니다.",
    "결정": "토큰·타이포·컴포넌트 규칙을 학습한 AI가 Figma에 실제 STACK 인스턴스를 배치하도록, MCP 서버와 Figma 플러그인으로 구성한 Stack Canvas를 만들었습니다.",
    "근거": "1편의 Stack MCP는 결과물이 코드라 디자인 탐색에 맞지 않았고, 초안이 있어야 기준이 생기고 피드백도 빨라진다고 봤습니다.",
    "결과": "모바일·PC 각 한 벌을 약 4분에 만들 수 있게 됐고 도구 자체도 디자이너가 4일 만에 구현했지만, AI가 판단까지 함께하는 단계는 아직 계획으로 남았습니다.",
    "출처": "https://brunch.co.kr/@8a0100de7ca0488/15",
    "날짜": "2026-04-06",
    "이미지": "./images/3d23fa5c-360a-81b8-88ec-e9fde7befa10.png"
  },
  {
    "id": "3d23fa5c-360a-81de-afa2-c909575a864e",
    "제목": "원티드 컴포넌트 개선 워크플로우 자동화: 수정 소요 5일 → 1일",
    "회사": "원티드랩",
    "도메인": "HR, B2C",
    "문제카테고리": [
      "디자인시스템"
    ],
    "상황제약": "디자인시스템 공개 후 첫 대규모 업데이트라 영향 범위가 컸고, AI가 실제 피그마 파일과 코드 저장소에 접근하므로 단계마다 사람 승인을 받게 했습니다.",
    "요약": "컴포넌트 1건 수정에 딸린 6단계 실행 작업을 Claude Code 스킬에 위임해 소요를 5일에서 하루로 줄인 사례입니다.",
    "문제": "모서리 둥글기 하나를 바꾸는 데도 3플랫폼 확인부터 슬랙 공유까지 6단계가 붙어, 담당자가 플랫폼당 1명뿐인 상황에서 판단보다 실행에 더 많은 시간을 썼습니다.",
    "결정": "6단계를 /component-improve 스킬로 묶어 GitHub·Figma·Atlassian·Slack MCP를 연결하되, 스펙 판단과 시각 검수는 사람이 맡도록 못 박았습니다.",
    "근거": "3플랫폼 저장소를 병렬로 읽으면 스펙 불일치가 자동으로 드러나고, 네이밍·토큰 점검 같은 반복 작업은 AI가 잘하지만 팀에 맞는 결정과 시각 검수는 못 한다고 봤습니다.",
    "결과": "컴포넌트 1건 수정이 약 5일에서 하루로 줄고 담당자 부재 시 병목도 사라졌지만, 판단과 최종 검수는 여전히 사람이 해야 할 일로 남았습니다.",
    "출처": "https://brunch.co.kr/@wanteddesign/42",
    "날짜": "2026-08-03",
    "이미지": "./images/3d23fa5c-360a-81de-afa2-c909575a864e.png"
  },
  {
    "id": "3d23fa5c-360a-8189-bd50-f4258b750b5e",
    "제목": "여기어때 홈 카드 개선기: 모듈 역할(JTBD) 재정의와 셀러카드 확장 A/B 테스트",
    "회사": "여기어때",
    "도메인": "커머스, B2C",
    "문제카테고리": [
      "홈",
      "정보구조",
      "디자인시스템"
    ],
    "상황제약": "주 고객이 이미 목적지를 정하고 진입해 개선 가치에 회의론이 있었고, 다른 화면에서도 쓸 기존 디자인시스템 카드(YDS SellerCard)를 깨지 않고 확장해야 했습니다.",
    "요약": "홈 모듈 6개를 한 번에 바꿔 A/B에서 이겼지만, 성과의 진짜 원인이 다른 곳에 있었음이 드러나 해석이 뒤집힌 사례입니다.",
    "문제": "선택 기준이 다른 상품을 모두 같은 캐러셀 카드로 노출하고 첫 화면에서 아래로 시선이 이어지지 않아, 홈 하단 탐색 모듈의 클릭률이 계속 떨어졌습니다.",
    "결정": "카드 형태 대신 모듈의 역할(JTBD)을 먼저 정의해 셀러카드 6종을 확장했고, 핵심은 '최근 본 상품' 카드를 줄여 다음 모듈이 화면에 걸쳐 보이게 한 것입니다.",
    "근거": "모듈마다 역할이 다르니 형태보다 역할 정의가 먼저고, 다음 콘텐츠가 살짝 보이는 것만으로 스크롤 신호가 된다고 판단했습니다.",
    "결과": "9일간 100만 명 A/B에서 개선안이 이겨 런칭했지만, '최근 본 상품' 클릭률과 엘리트 모듈 전환율은 오히려 떨어졌습니다. 후속 분석에서 데이터 과잉 집계가 확인돼, 실제 성과 원인은 셀러카드가 아니라 '최근 본 상품' 축소였음이 밝혀졌습니다(수치는 '소폭'으로만 공개).",
    "출처": "https://techblog.gccompany.co.kr/여기어때-홈-카드-개선기-2-46d702bec82e",
    "날짜": "2026-09-02",
    "이미지": "./images/3d23fa5c-360a-8189-bd50-f4258b750b5e.png"
  },
  {
    "id": "3b23fa5c-360a-81cd-92c4-cc17a72bd431",
    "제목": "\"토스 참 쪼잔하다\"는 유저 말에 1억을 태운 이유",
    "회사": "토스",
    "도메인": "핀테크",
    "문제카테고리": [
      "광고 UX"
    ],
    "상황제약": "만보기는 유저 수만큼 리워드 비용이 비례 증가하는 구조라 광고 수익화 없이는 서비스 존폐가 걸린 상황이었음",
    "요약": "포인트 받고 광고를 강제로 보게 하는 방식이 통하지 않는다는 걸 뼈아프게 확인한 사례예요. 광고를 \"기다리는 시간\"에 복권 같은 기대감을 얹었더니 그제야 수익과 사용자 경험을 동시에 잡았습니다.",
    "문제": "만보기 서비스의 지속가능성을 위해 광고 수익화가 필요했지만, 포인트 지급 직후 광고를 강제 시청시키는 방식은 첫날 100만 명이 써볼 만큼 반응은 있었으나 재사용으로 이어지지 않았음. 커피쿠폰·상품권 등 리워드를 7개월간 다양하게 바꿔봐도 반응 개선 없이 실패 지속",
    "결정": "\"어떻게 광고를 보게 하지?\" 대신 \"어떻게 기다리는 시간을 가치있게 만들지?\"로 질문을 전환. 광고를 보는 대기시간에 최대 100만 원 당첨 복권 형태의 기대감을 부여하고, \"꽝\" 없이 최소 2원은 보장하도록 설계",
    "근거": "사용자 인터뷰에서 참가자가 광고 노출 타이밍에 앱을 스와이프해 끄고 \"광고 안 보고도 포인트 받는 법\"을 오히려 알려준 사건이 결정적 계기. 강제 시청은 광고 매출로 이어지지 않는다는 걸 명확히 확인",
    "결과": "사용자에게 제공하는 리워드를 뛰어넘는 광고 수익 창출.",
    "출처": "https://toss.tech/article/undercover-silo-3",
    "날짜": "2025-07-21",
    "이미지": "./images/3b23fa5c-360a-81cd-92c4-cc17a72bd431.png"
  },
  {
    "id": "3b23fa5c-360a-814d-96cb-c1d34eec1921",
    "제목": "OTT에선 처음 보는 재화모델, UX로 어떻게 풀었을까?",
    "회사": "라프텔",
    "도메인": "글로벌, 콘텐츠",
    "문제카테고리": [
      "광고 UX"
    ],
    "상황제약": "동남아 시장은 광고 기반 무료 시청(AVOD) 선호도가 높고, 건당 결제(TVOD) 판권 단가가 더 비싸 대안 BM이 필요했던 비즈니스 제약",
    "요약": "국내 OTT에서 낯선 \"광고 시청 후 재화 획득 → 스킵\" 모델을 도입하며 사용자가 헷갈리지 않도록 단계적으로 안내한 사례예요. 정량 지표 대신 사용자가 기능을 자연스럽게 받아들였다는 정성적 반응으로 성과를 확인했습니다.",
    "문제": "글로벌 서비스 수익화를 위해 \"광고 미리보기로 재화 획득 → 시청 중 광고 스킵\"이라는 국내 OTT에서 생소한 재화(BM) 모델을 도입해야 했는데, 낯선 UX라 사용자가 헷갈릴 위험이 있었음",
    "결정": "신규 유저에게 재화 10개 무료 제공, 진입 전 바텀시트 안내, 마이 재화 화면 툴팁, 재화 차감 애니메이션 추가 등으로 단계적으로 학습시키는 방식을 선택. 어뷰징 방지를 위해 재화 지급을 1시간당 1회·최대 6회로 제한",
    "근거": "네이버웹툰 쿠키형 선지불 모델 대신 시청 중 차감 방식을 택한 이유를 판권 단가 구조 등 비즈니스 논리로 설명",
    "결과": "정성적. \"사용자들이 기능을 잘 이해했고 자연스럽게 재화를 사용했다\"는 서술만 있고 구체적 수치는 제시되지 않음",
    "출처": "https://blog.laftel.net/post/33",
    "날짜": "2025-06-09",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/e4d3f399-ac1a-4620-9c80-e5b4593d003c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-08-04_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.59.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=bc0d7e4e75f6c695c9cdfa0ac28d1d5905526e427cb6f8f2d5e18e48e4f07738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "3a43fa5c-360a-814d-9993-f39a626ac5eb",
    "제목": "가입은 쉽게, 로그인은 실패 없이! 휴대폰번호로 계속하기",
    "회사": "배달의민족",
    "도메인": "커머스",
    "문제카테고리": [
      "가입",
      "인증/본인확인"
    ],
    "상황제약": "카카오·네이버 로그인 대비 자체 가입수단 경쟁력이 필요한 상황.",
    "요약": "이메일 가입 대신 휴대폰번호 패스워드리스 방식을 도입해 가입과 로그인을 동시에 개선한 사례예요. 비밀번호를 없앴더니 가입도 빨라지고 로그인 실패도 크게 줄었습니다.",
    "문제": "이메일 기반 가입 전환율이 30%대에 머물러 있음. 로그인 실패와 계정복구 요청이 잦음.",
    "결정": "이름·생년월일·휴대폰번호만으로 인증하는 패스워드리스 가입·로그인 방식 출시.",
    "근거": "비밀번호 분실이나 오기입이 로그인 실패의 주요 원인이라는 가설.",
    "결과": "가입 전환율 30%대에서 70%대로 상승(네이버 로그인보다 높음). 가입 소요시간 절반 단축, 로그인 실패율 48% 감소, 계정복구 시도 35% 감소.",
    "출처": "https://techblog.woowahan.com/15895/",
    "날짜": "2024-02-27",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/95a1ffdd-1250-4a08-a01e-097503907850/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=9873338fd67771f4de7e5c7284b26c36b31a416e3c5e64ae5dc2cd964a59f0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "3a23fa5c-360a-8173-9909-deea0c4b82ff",
    "제목": "여기어때 구매 유도 쿠폰 UI 개선 실험",
    "회사": "여기어때",
    "도메인": "커머스",
    "문제카테고리": [
      "결제"
    ],
    "상황제약": "상품 상세 페이지 상단 영역에서 서로 다른 시각적 스타일로 A/B 테스트 진행.",
    "요약": "쿠폰 버튼의 시각적 스타일만 바꿔서 클릭률을 끌어올린 사례예요. 시각적 개선만으로도 효과가 있는지 직접 실험으로 검증했습니다.",
    "문제": "결제 단계에서 혜택을 사용자가 직관적으로 인지하기 어려움.",
    "결정": "상품 상세 페이지 상단의 쿠폰 버튼 시각적 스타일을 개선해 혜택을 더 빠르게 인지하도록 변경.",
    "근거": "사용자는 구매 전 가격·혜택·리뷰를 중요하게 생각한다는 데이터를 사전 확인. 시각적 개선의 효과를 실험으로 직접 검증.",
    "결과": "선착순 할인 쿠폰 영역 클릭률 17% 상승, 쿠폰 받기 영역 16% 상승.",
    "출처": "https://techblog.gccompany.co.kr/사소한-영역이라도-개선이-필요해요-2fe7653dcf1e",
    "날짜": "2023-04-28",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/4c84a8ff-b90b-462d-acd3-029405a3e6c0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=7f4e046506572f1a78163263ed43a2705de92d067862a7744cac32ec1818b3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "3a23fa5c-360a-81c9-94b7-fd06c4a385a5",
    "제목": "50개 이상 글로벌 결제수단의 전환 효과 테스트",
    "회사": "Stripe",
    "도메인": "핀테크, 글로벌",
    "문제카테고리": [
      "결제"
    ],
    "상황제약": "Stripe 플랫폼 전체 가맹점을 대상으로 한 대규모 실험.",
    "요약": "카드 외 결제수단을 늘려도 전환율이 떨어지지 않는다는 걸 대규모 실험으로 증명한 사례예요. 오히려 매출과 전환율 모두 올랐습니다.",
    "문제": "카드 외 결제수단을 늘리면 로그인·수기입력 등 마찰이 늘어 전환이 떨어질 수 있다는 우려.",
    "결정": "결제 화면에 카드 외 관련 결제수단을 최소 1개 이상 동적으로 노출.",
    "근거": "저비용 결제수단이 마찰을 늘려 전환을 저해할 거라는 우려와 달리 실제 데이터는 다르게 나타남.",
    "결과": "가맹점 평균 매출 12% 상승, 전환율 7.4% 상승.",
    "출처": "https://stripe.com/blog/testing-the-conversion-impact-of-50-plus-global-payment-methods",
    "날짜": "2025-04-10",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/90263b3d-c81a-45c0-b9f0-13ef7fd925ca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=53bcd862c26f82bf2b8841f4cf6c559fab187b7b8fd3e558f97b7f3b9737b95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "3a23fa5c-360a-81e3-be23-e7e212e032e5",
    "제목": "여기어때 상품 카드(셀러카드) UX 개선: 30번의 실험",
    "회사": "여기어때",
    "도메인": "커머스",
    "문제카테고리": [
      "인트로"
    ],
    "상황제약": "약 3개월간 플랫폼 전반의 카드 UI 통일 작업으로 진행.",
    "요약": "상품 카드 UI를 30번이나 반복 개선해 성과를 낸 사례예요. 훑어보는 화면이라도 구매 결정에 큰 영향을 준다는 걸 확인했습니다.",
    "문제": "상품 카드 UI가 플랫폼 전체에서 일관성이 없고 구매 결정에 미치는 영향이 최적화되지 않음.",
    "결정": "AS-IS·TO-BE를 정의하고 A/B 테스트로 검증하며 카드 UI를 30회 반복 개선.",
    "근거": "사용자가 깊이 주의를 기울이지 않고 빠르게 훑어보는 화면이라도 구매 결정에 중요한 역할을 한다는 가설.",
    "결과": "구매전환율과 매출이 상당히 상승(구체 수치 비공개). 사내 최고 임팩트상 수상.",
    "출처": "https://techblog.gccompany.co.kr/30번-실험-끝에-성공한-여기어때-상품-카드-ui-개선기-1c30ab8f0dfc",
    "날짜": "2023-10-20",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/041a4900-d25a-4a36-8df9-2b5fbb72f296/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=a941be73d6b9a599323dc39d6478b23c82e600eb43378d8704d14b30aaf4d2d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "3a23fa5c-360a-81ec-a616-f2f9be9f9cf2",
    "제목": "직장인 월급복권 이벤트: 리워드 기반 가입 유도",
    "회사": "원티드",
    "도메인": "HR",
    "문제카테고리": [
      "가입"
    ],
    "상황제약": "정규 프로젝트가 아닌 사이드 프로젝트. 정규 PM 없이 6인 임시 TF로 진행.",
    "요약": "소규모 임시 TF로 가입 유도 이벤트를 만든 사례예요. 반응은 좋았지만 유입된 가입자의 품질에는 한계가 있었다는 걸 스스로 밝힌 점이 눈에 띄어요.",
    "문제": "가입자 트렌드가 정체되어 있어 대규모 유입을 일으킬 이벤트가 필요했음.",
    "결정": "실시간 당첨 노출과 공유 시 복권 추가 지급 등 바이럴 장치 설계. 사행성 우려로 슬롯머신 대신 클로버 긍기 메타포 채택. 정식 UT 대신 프로토타입으로 약식 검증.",
    "근거": "유저 저니맵을 먼저 작성해 아이디어를 수렴. 사행성이 브랜드 이미지에 부정적 영향을 줄 수 있다는 우려가 메타포 선택의 핵심 근거.",
    "결과": "예상보다 큰 반향과 휴면 유저 활성화 등 긍정적 지표(정성적). 다만 이 방식으로 유입된 가입자는 구직 퍼널 전환율이 낮았다는 한계를 스스로 밝힘.",
    "출처": "https://brunch.co.kr/@wanteddesign/26",
    "날짜": "2023-07-20",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/d6589f12-e6cd-44cc-864c-b409bebf2c8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.58.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=ac608b4850446d673a9e3d7a61e2b9f2fe41b03f2e3aa01dff97b1484eb5dc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-809a-863b-f1f2e8f67b24",
    "제목": "B마트 테마관(신선관·뷰티관) 탐색 편의성 개선",
    "회사": "배달의민족",
    "도메인": "커머스",
    "문제카테고리": [
      "홈",
      "정보구조"
    ],
    "상황제약": "B마트가 편의점 대용 이미지에서 장보기 플랫폼으로 포지션을 전환하려는 시점.",
    "요약": "B마트 테마관을 장보기 플랫폼답게 개편해 탐색 편의성을 높인 사례예요. 사용자 리서치에서 나온 목소리를 3단계에 걸쳐 반영했습니다.",
    "문제": "신선관·뷰티관 오픈 후 카테고리 미리보기가 스크롤 깊숙이 있고 세분화도 안 돼 탐색이 불편하다는 의견 다수.",
    "결정": "1단계, 상품을 더 보여주는 컴포넌트로 교체하고 카테고리 구좌 추가. 2·3단계, 규격 통일하고 카테고리 필터 추가.",
    "근거": "리서치에서 \"먼저 담고 추가 탐색한다\", \"세분화된 카테고리가 안 보인다\"는 피드백이 반복됨.",
    "결과": "3단계 개선 후 테마관 내 반응률 약 11% 증가, 주문 기기 수 약 15% 증가.",
    "출처": "https://techblog.woowahan.com/18719/",
    "날짜": "2024-07-30",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/0ce27ae2-9967-49e5-9c59-5ee1b7e740f7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=8a3cfcd709e15f3dc7789773c2bed4b8c1e5596857a599a4ec8b9d3e63e87093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80ab-9da7-fb7f85ebc726",
    "제목": "배민 온라인 입점신청 개선: OCR 도입과 퍼널 축소",
    "회사": "배달의민족",
    "도메인": "커머스, B2B",
    "문제카테고리": [
      "정보입력",
      "가입"
    ],
    "상황제약": "오프라인 영업매니저 방식과 병행 운영 중. PM·디자이너·개발자가 각자 다른 경로로 문제를 인지.",
    "요약": "입점신청 과정에 OCR과 챗봇형 UI를 도입해 절차를 크게 줄인 사례예요. 다만 사용성이 좋아진 것과 실제 입점 완료는 다른 문제였다는 반전이 있습니다.",
    "문제": "온라인 입점신청 진입자의 50%가 첫 단계인 사업자정보 입력에서 이탈. 서류 정보를 전부 수기로 입력해야 하는 게 허들.",
    "결정": "사업자등록증에 OCR API 도입해 수기 입력 제거. 6개 퍼널을 4개로 축소. 입력폼 대신 챗봇형 UI 채택. 이탈 후 재진입 시 입력값 유지.",
    "근거": "OCR 도입 전 기존 서류 1,000여 건으로 정확도 사전 검증. UT 결과 챗봇형이 오류율과 심리적 부담 모두 낮음.",
    "결과": "10분 이내 완료 비율 24.2%p 증가, 평균 소요시간 5.9시간 감소. 다만 최종 입점 완료율은 오히려 1.2%p 감소.",
    "출처": "https://techblog.woowahan.com/20627/",
    "날짜": "2024-12-10",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/a40b63cf-0bb6-45ec-84bd-454e2358b7d4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=1e0aa2bbe05a95832fe5763012cac495ecfa7d8dac9f29fe5729154e90ad13aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80d8-beda-e79972e544ce",
    "제목": "최소주문금액바: 4단계에 걸친 반복 실험과 성공/실패의 교차",
    "회사": "배달의민족",
    "도메인": "커머스",
    "문제카테고리": [
      "결제"
    ],
    "상황제약": "라이더 1회 배달 건수 제한으로 최소주문금액 정책이 구조적으로 필요.",
    "요약": "최소주문금액 안내를 4단계에 걸쳐 반복 실험한 사례예요. 성공과 실패가 교차했지만 그 과정에서 \"혜택을 언제 보여줘야 하는가\"에 대한 원리를 계속 검증했습니다.",
    "문제": "최소주문금액이 있는데 확인하려면 장바구니까지 들어가야 해 탐색-주문 사이 이탈 발생.",
    "결정": "1단계, 가게홈에서 달성 여부 실시간 안내. 2단계, 전 지면·전 OS 확대. 3단계, 업셀링 넣지 추가. 4단계, 저단가 상품 추천과 노출 조건 조정.",
    "근거": "매 단계 보조지표를 정밀 분석해 예상과 다른 결과의 원인을 추적. 노출 조건 충족자만 필터링해 재분석.",
    "결과": "1·2단계는 이탈률 감소와 주문전환율 상승(정성적). 3·4단계는 표면적 실패였으나 재분석으로 \"구매의사 높은 고객에게 혜택을 보여줘야 통한다\"는 원리를 재확인.",
    "출처": "https://techblog.woowahan.com/26379/",
    "날짜": "2026-06-26",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/d2eed95a-8366-41dd-ab12-8faba2783c57/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=ddb117c0d60f4323c117d1fb3114e92deacae5bce72541e78a0427a04f4244ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-808e-83c6-ef6d5ca511a5",
    "제목": "개발자 부트캠프 '항해' 지원서 제출률 개선",
    "회사": "팀스파르타",
    "도메인": "에듀테크",
    "문제카테고리": [
      "정보입력"
    ],
    "상황제약": "지원서에 객관식과 주관식 문항이 혼재.",
    "요약": "지원서 문항 순서만 바꿔서 제출률을 크게 끌어올린 사례예요. 사용자가 쉬운 문항부터 채운다는 패턴에 주목했습니다.",
    "문제": "지원서 작성 페이지 접속 후 이탈이 많아 제출률이 낮음.",
    "결정": "사용자가 순서와 무관하게 객관식을 먼저 채운다는 패턴 발견 후 문항 순서를 객관식 우선으로 재배치.",
    "근거": "이탈 고객 행동 데이터 분석 결과 쉽은 문항부터 채우는 경향 확인.",
    "결과": "제출률 15%에서 25%로 일주일 만에 상승. 문항 추가 후에도 안정적으로 유지.",
    "출처": "https://blog.career.spartaclub.kr/designer",
    "날짜": "2024-04-05",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/75625d43-7594-4ad9-a67a-78ed331a0180/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=cfc30bf06132844ccc2a3c682a079cdeea8d3884af664c9bdcb293f6b99184de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80dc-96e2-e072ac0f22a5",
    "제목": "뱅크샐러드 홈 탭: 지출 관리 섹션 통합",
    "회사": "뱅크샐러드",
    "도메인": "핀테크",
    "문제카테고리": [
      "홈",
      "정보구조"
    ],
    "상황제약": "홈 탭 자체가 마이데이터 확장으로 신설된 지 얼마 안 된 화면.",
    "요약": "홈 화면의 분산된 섹션을 하나로 합쳐 스크롤을 줄인 사례예요. 데이터와 인터뷰 결과가 서로 일치하는 걸 확인한 뒤 진행했습니다.",
    "문제": "홈 탭에서 금융 일정과 오늘 지출 섬션이 분리돼 있어 스크롤이 길고, 스크롤을 내릴수록 클릭 전환율이 떨어짐.",
    "결정": "분산된 두 섬션을 하나로 통합해 스크롤을 줄임. 사용자가 실제로 보고 싶어하는 정보 위주로 재구성.",
    "근거": "데이터 분석과 사용자 인터뷰 결과가 서로 일치함을 확인한 뒤 진행.",
    "결과": "섬션 클릭 수 25% 상승.",
    "출처": "https://blog.banksalad.com/tech/building-brand-new-home-3/",
    "날짜": "2024-06-26",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/c4010c5c-c6ce-4a59-8a88-b44d8bbee064/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.54.07.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=7f5664de9d0c7919d7257c8a742e36c94a0b5d950fe41e80d71bbaaaebd5b41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-8064-9ffe-f9558834ab76",
    "제목": "라프텔 로그인/가입 UX 개선: 뎁스 축소",
    "회사": "라프텔",
    "도메인": "글로벌, 콘텐츠",
    "문제카테고리": [
      "가입",
      "인트로"
    ],
    "상황제약": "신규 유저는 쉬운 가입을 원하고 기존 유저는 로그인 수단 기억을 원해 목표가 다름.",
    "요약": "로그인까지 가는 단계 수를 줄여 사용자 불편을 낮춘 사례예요. 큰 수치보다는 문의량 감소로 효과를 체감했습니다.",
    "문제": "로그인 필요 기능 접근 시 뎁스가 불필요하게 깊음. 소셜 로그인은 버튼을 한 번 더 눌러야 노출됨.",
    "결정": "안내 화면 없이 바로 로그인·가입 랜딩으로 이동. 소셜 로그인 노출을 위한 추가 클릭 제거.",
    "근거": "불필요한 뎁스가 이탈을 유발한다는 일반 원칙에 기반.",
    "결과": "CS 담당자가 체감한 VOC 감소(정성적).",
    "출처": "https://blog.laftel.net/post/15",
    "날짜": "2025-01-09",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/011536f6-81a9-4886-8865-a5f994e1d055/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.53.26.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=3bffcc47f92520e68b42a0aa715d3736536714a82796081dfdc42ee161ee0dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-8004-ba1b-d8e9bbe56c45",
    "제목": "라프텔 멤버십 구매 버튼 레이블 개선: 클릭률 20%→50%",
    "회사": "라프텔",
    "도메인": "글로벌, 콘텐츠",
    "문제카테고리": [
      "결제"
    ],
    "상황제약": "SVOD·TVOD 병행 서비스. 앱 로그 누락으로 웹 데이터만 분석(측정 한계 있음).",
    "요약": "멤버십 구매 버튼의 문구만 바꿔서 클릭률을 크게 끌어올린 사례예요. 가격을 보여주는 대신 \"무제한\"이라는 가치를 강조했더니 반응이 달라졌습니다.",
    "문제": "멤버십 작품인데 개별구매(TVOD)로 보는 유저가 예상보다 많음. 멤버십 버튼 노출 방식이 원인일 가능성.",
    "결정": "1차, 버튼에 가격(9,900원) 직접 노출 → 클릭률 20%대로 하락. 2차, \"무제한으로 보기\"로 문구만 수정.",
    "근거": "가격을 직접 보여주면 부담을 느껴 클릭 전에 포기함. 가격 대신 가치 중심 표현으로 전환.",
    "결과": "문구만 바꿔 클릭률 최대 50%대로 상승. 단, 최종 멤버십 결제 전환율은 배포 전후로 큰 변화 없음.",
    "출처": "https://blog.laftel.net/post/38",
    "날짜": "2025-06-25",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/a5d09987-03e9-42d7-9a44-1c22dc8da2a0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.51.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=48fc456222acb672139ac52386302829f92022b7f2dca1014f299944a71c6646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-8018-b216-e3683e5b6c8a",
    "제목": "라프텔 글로벌 소셜 로그인 도입: 전환율 효과 검증",
    "회사": "라프텔",
    "도메인": "콘텐츠, 글로벌",
    "문제카테고리": [
      "가입",
      "인증/본인확인"
    ],
    "상황제약": "MVP 단계에서는 소셜 로그인을 뺐다가 이번에 재도입.",
    "요약": "해외 서비스에 소셜 로그인을 다시 도입해 가입 장벽을 낮춘 사례예요. 혜택보다 가입 절차 자체가 문제였다는 걸 확인했습니다.",
    "문제": "신규 가입 혜택을 명확히 안내해도 회원가입 전환율이 기대에 못 미침.",
    "결정": "이메일 가입만 있던 방식에 소셜 로그인(카카오·구글·애플) 추가. 다른 변수는 유지해 효과만 분리 측정.",
    "근거": "혜택 부족이 아니라 가입 허들 자체가 높아 전환이 안 된다는 가설로 전환.",
    "결과": "회원가입 전환율 16.9%p 상승. 가입 이후 유료 전환율은 변화 없음. 신규 가입자 95.5%가 소셜 로그인 선택.",
    "출처": "https://blog.laftel.net/post/27",
    "날짜": "2025-06-27",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/7c2c4945-d5e3-4d1c-a131-b8e76fd7757b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.50.31.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=7233b034989ab35b29c7757dc5cef34e4594cdf9862c0df324d8c1f9f91f3c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80fb-b614-e2bbff8a6e2a",
    "제목": "강남언니 일본 로그인 화면 개선: 실패를 통해 배우는 A/B 테스트",
    "회사": "강남언니",
    "도메인": "헬스케어, 글로벌",
    "문제카테고리": [
      "가입",
      "인트로"
    ],
    "상황제약": "해외 진출 초기 단계라 일본 유저 유입 자체가 적어 결과 도출에 시간이 오래 걸림.",
    "요약": "일본 시장 로그인 화면을 두 차례에 걸쳐 실험해 전환율을 크게 높인 사례예요. 1차 실패를 복기하고 변수를 하나로 좁혀 재도전했습니다.",
    "문제": "일본 시장 로그인 화면에서 회원가입 완료율이 59.9%에 그침.",
    "결정": "1차, 정보 부족이 원인이라 가정해 앱 소개를 늘린 3개 안을 실험했으나 기존안이 더 좋아 전부 실패. 2차, 버튼 개수와 위치를 고정하고 문구 하나만 바꿔 재실험.",
    "근거": "1차 실패 후 가설이 두 개로 뒤섞여 있었음을 확인. 유저 인터뷰에서 소셜로그인 버튼이 개인정보 노출 우려로 부담스럽다는 새 근거 발견.",
    "결과": "2차 실험에서 이벤트 강조안이 병원 조회수 3.58% 상승으로 채택. 1년간 누적 개선으로 회원가입 전환율 20%p 상승.",
    "출처": "https://blog.gangnamunni.com/post/AB-test-Baisc",
    "날짜": "2021-02-17",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/5a24b27a-ac59-4ef3-9f6c-e9bec9e54d63/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.49.51.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=7d01ab7a10944df19be03b371ec53af312bb0b46015ea6e662bda5da456c9ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80b0-9397-c2a8992604c3",
    "제목": "29CM 주문서 결제 혜택 UX 개편: \"그래서 얼마에 살 수 있는 거예요?”",
    "회사": "29CM",
    "도메인": "커머스",
    "문제카테고리": [
      "결제"
    ],
    "상황제약": "신용카드·페이류 등 다양한 결제수단과 즉시할인·쿠폰·마일리지가 혼재.",
    "요약": "결제수단별 혜택을 실시간으로 보여주도록 개편해 고객이 혜택을 바로 체감하게 만든 사례예요.",
    "문제": "주문서에서 결제수단별 혜택을 직관적으로 인지하기 어렵고 실시간 할인 반영이 안 돼 혜택 체감도가 낮음.",
    "결정": "결제수단 선택 시 실제 할인 적용 후 최종 금액이 실시간 반영되도록 개편. 비즈니스 로직과 표시 로직 분리.",
    "근거": "즉시할인은 회사엔 저비용이고 고객은 바로 체감 가능한 혜택인데 기존 UI엔 이 이점이 안 드러남.",
    "결과": "구매 전환율 향상(정성적, 구체 수치 비공개).",
    "출처": "https://techblog.musinsa.com/29cm-주문서-결제-혜택-ux-개편기-그래서-얼마에-살-수-있는-거에요-32926b6d91b6",
    "날짜": "2025-09-15",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/fe15a8d7-50de-4bf7-bbe0-02b6d5d69bfd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.48.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=e8f69ac1e4d2535b004332056cbefc1312cd0fbd07715fe7b678e2e130c2c358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80e0-bc2e-e5c6474cb91c",
    "제목": "29CM 스타일 온보딩: 룩북 선택으로 가입·구매 전환율 동시 개선",
    "회사": "29CM",
    "도메인": "커머스",
    "문제카테고리": [
      "가입",
      "인트로"
    ],
    "상황제약": "PM 2명, 디자이너 1명 등 총 6명의 소규모 팀으로 진행.",
    "요약": "가입 전에 스타일 취향부터 물어보는 온보딩으로 가입과 구매 전환을 동시에 높인 사례예요. 가입 즉시 개인화를 적용할 수 있게 만든 게 핵심입니다.",
    "문제": "앱 설치 후 회원가입 완료율 44%에 불과. 가입자 18%는 7일 내 첫 구매 없이 이탈. 전체 설치자의 약 74%가 자연 이탈.",
    "결정": "설치 직후 홈 대신 룩북 기반 스타일 온보딩을 먼저 노출. 카테고리와 스타일을 선택하게 한 뒤 가입 유도. 건너뛰기 시 좋아요 데이터가 사라진다는 점 강조.",
    "근거": "가입 직후엔 개인화할 데이터가 없다는 문제를 발견. 온보딩 중 좋아요 신호를 미리 수집해 가입 즉시 개인화를 적용하는 전략.",
    "결과": "가입 전환율 3.3%p 상승, 첫 구매 전환율 1.2%p 상승. 둘 다 통계적으로 유의미.",
    "출처": "https://jayyoungjun-kim.github.io/29cm-style-onboarding.html",
    "날짜": "2023-01-01",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/868c63b9-981e-432b-8dd9-f6e69492bf37/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.47.56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=ff217c1f7361faff10349395ef01cbdb7dc4271f97f71bac4815fb6a004e3aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-8068-81c9-cefb1bcb0d43",
    "제목": "Sniper Link: 가입 확인 이메일 전환율 개선",
    "회사": "Growth.Design (자체 실험)",
    "도메인": "SaaS",
    "문제카테고리": [
      "가입",
      "인증/본인확인"
    ],
    "상황제약": "업계 평균 미확인 이메일 비율이 27~61%로 알려진 상황.",
    "요약": "가입 확인 이메일을 놓치는 문제를 작은 아이디어로 해결한 사례예요. 받은편지함 전체가 아니라 인증 메일만 바로 보여줬더니 확인율이 올라갔습니다.",
    "문제": "가입 후 이메일 인증 링크를 확인하지 않고 이탈하는 사용자 비율이 높음.",
    "결정": "인증 메일 링크 클릭 시 자사 도메인 메일만 필터링해 보여주는 \"Sniper Link\"로 자동 이동.",
    "근거": "받은편지함에 메일이 많을수록 인증 메일을 놓치기 쉽다는 \"Hick's Law\"에 근거.",
    "결과": "이메일 인증률 7% 상승, 미확인 비율 6%까지 감소.",
    "출처": "https://growth.design/case-studies/sniper-link",
    "날짜": "2022-07-01",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/a4ba43ed-19c7-494c-ae5f-1cacec1a1606/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.47.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=cc2e09929b72ed16603643ddc4b60f0d6e011a0abcf3d756450c9198b8932a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-8092-9372-f7c17cefc28f",
    "제목": "비회원 가입 전환율 높이기: 상상 유도형 문구로 재개선",
    "회사": "토스뱅크",
    "도메인": "핀테크",
    "문제카테고리": [
      "가입",
      "인트로"
    ],
    "상황제약": "이전 실험에서 문구 반응 패턴을 이미 확보한 상태.",
    "요약": "기능 설명 문구를 상황을 상상하게 만드는 문구로 바꿔 전환율을 높인 사례예요. 이전 실험에서 얻은 학습을 그대로 확장 적용했습니다.",
    "문제": "비회원 가입 인트로 화면의 전환율을 추가로 개선해야 함.",
    "결정": "기능 설명형 문구를 사용자가 이익을 체감하는 구체적 상황을 상상하게 하는 문구로 전환.",
    "근거": "이전 실험에서 확인한 \"관심사에 맞춘 문구가 CTR·CVR을 높인다\"는 학습을 그대로 적용.",
    "결과": "CTR 5% 상승, CVR도 유의미하게 상승.",
    "출처": "https://toss.tech/article/45391",
    "날짜": "2026-02-27",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/7a9a490c-4a65-4ca2-9b15-95bbdf89bb9d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.46.23.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=6119bc899f341f4e255a67209aebcf431ed0469f9789d0e45587c4b260dec759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80e2-bf33-f0efb13da725",
    "제목": "비회원 가입 전환율 높이기: 문구 + 이미지 로딩 속도 개선",
    "회사": "토스뱅크",
    "도메인": "핀테크",
    "문제카테고리": [
      "가입",
      "인트로"
    ],
    "상황제약": "저사양 기기를 포함한 다양한 디바이스 환경.",
    "요약": "문구와 로딩 속도라는 두 가지 문제를 함께 해결해 처음으로 유의미한 개선을 만든 사례예요.",
    "문제": "비회원 가입 인트로 화면의 낮은 전환율.",
    "결정": "매력 없던 문구를 반응 좋은 키워드로 교체하고, 이미지를 저용량 확장자로 바꿔 로딩 속도 개선.",
    "근거": "기존 화면을 분석해 매력 없는 문구와 느린 로딩이라는 두 가지 문제를 명확히 정의.",
    "결과": "클릭률과 전환율 모두 상승. 첫 유의미한 개선.",
    "출처": "https://toss.tech/article/45391",
    "날짜": "2026-02-27",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/f3d9c02e-fad8-4e75-9a2b-b226f3934756/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.45.35.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=05bc8685ee6c3dd34d6778a6079b43ea69200abe7bdb91c3ae7fd35010c196c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80fa-8811-dbecbbb7321a",
    "제목": "비회원 가입 전환율 높이기: 상담원 컨셉 + 선택지 축소 (실패 사례)",
    "회사": "토스뱅크",
    "도메인": "핀테크",
    "문제카테고리": [
      "가입",
      "인트로"
    ],
    "상황제약": "이미 많은 실험이 진행된 성숙한 퍼널을 실험 설계 경험이 없는 인턴이 담당.",
    "요약": "선택지를 줄이면 전환율이 오를 거라 가정했지만 실제로는 반대 결과를 얻은 실패 사례예요. 가설 자체가 기존 상태를 잘못 파악했던 게 원인이었습니다.",
    "문제": "비회원 가입 인트로 화면의 낮은 전환율.",
    "결정": "상담원이 추천하는 컨셉과 선택지를 줄인 화면으로 교체. 결과적으로 버튼은 1개에서 2개로 오히려 늘어남.",
    "근거": "선택지가 적으면 전환율이 오를 거라는 가설이었으나 기존 화면의 선택지가 이미 더 적었음.",
    "결과": "클릭률 10% 이상 하락, CVR 3% 이상 하락. 실패.",
    "출처": "https://toss.tech/article/45391",
    "날짜": "2026-02-27",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/84679c68-1966-417d-bd74-00aecc57931d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.44.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=1425c7d02c992525e2acb610860b06705174c6ac468a2aff053d43d73013caf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-80f3-b1c2-c0492c459c8e",
    "제목": "외국인 유저 인증 개선",
    "회사": "토스",
    "도메인": "핀테크",
    "문제카테고리": [
      "인증/본인확인"
    ],
    "상황제약": "타겟이 특히 정보 접근성이 낮은 블루칼러 외국인 노동자.",
    "요약": "외국인 사용자의 인증 실패 원인을 현장 인터뷰로 직접 찾아낸 사례예요. 리서치 방식도 캐주얼하게 바꿔서 진짜 이야기를 들을 수 있었습니다.",
    "문제": "외국인 사용자의 가입·인증 단계 이탈.",
    "결정": "이름 입력 구조 개선(성·이름 띄어쓰기 등)과 인증 절차 개선. 리서치도 공식적 인터뷰 대신 다문화센터 방문으로 변경.",
    "근거": "외국인등록증 이름 포맷이 은행·통신사 등록 이름과 불일치해 인증 실패가 반복됨. 실패 사유 안내도 없고 5회 초과 시 진행 불가.",
    "결과": "외국인 인증 퍼널 통과율 약 15% 상승. 내국인과의 통과율 격차 해소 수준까지 개선.",
    "출처": "https://toss.tech/article/45787",
    "날짜": "2026-03-06",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/63da4f4d-165d-4503-8f18-c2afc713c602/%E1%84%90%E1%85%A9%E1%84%89%E1%85%B3_%E1%84%8B%E1%85%AC%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB_%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5_%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC_%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=cde0120b79458331a12dfbe0dc2798f060259537e74aa6370d854562a3487778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  },
  {
    "id": "39b3fa5c-360a-8012-95f0-e0804954e0ae",
    "제목": "가입 과정 개선",
    "회사": "토스",
    "도메인": "핀테크",
    "문제카테고리": [
      "가입",
      "정보입력"
    ],
    "상황제약": "이미 성숙한 서비스. 시니어 사용자 급증이라는 인구 변화에 대응 필요.",
    "요약": "시니어 사용자 증가에 맞춰 가입 화면을 여러 번 개선한 시도예요. 세 가지 안은 실패했지만 네 번째 시도에서 \"왜 필요한지\" 설명을 더하자 반응이 달라졌습니다.",
    "문제": "가입 완료율 저하. 주 가입 연령대가 2030에서 시니어로 바뀌며 기존 UX가 안 맞음.",
    "결정": "권한 요구 축소, 인트로 삭제, 시니어 친화 UI 모두 기각. 최종적으로 정보 입력 이유를 설명하는 문구 추가.",
    "근거": "UT에서 확인, 문제는 \"무엇을 묻는지\"가 아니라 \"왜 묻는지\" 설명 부재. Android는 설명 없이 요구해 거부감 유발.",
    "결과": "앞선 세 가지 시도는 유의미한 차이 없음. 네 번째 시도에서 처음으로 가입 완료율 상승(수치 비공개).",
    "출처": "https://toss.tech/article/signup",
    "날짜": "2023-09-12",
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/0222dac3-af27-4526-a57e-16f6de7a82f6/%E1%84%90%E1%85%A9%E1%84%89%E1%85%B3_%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8_%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC_%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI74U6OD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T082412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAT%2F%2FCvW0Hmx%2FWiJLE5G71S1elLEnBF2ZrrE7Hembzj5AiEAupPQLo3k0SiAjO5mMtfv47K3LNUInv6PIl7OAa9HHi8q%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDCvh%2Ftla5ghgQIdMXircA9BimxHDs8Sky85A8%2F1N%2FdRg39seIJQzqC7UjNiywSUKgViBWx0YpOKq2sv5LOlYo%2Fo36dPzChE5G%2BB%2Br7hQ%2B9V09mJzgjBaPFy9Rx30a0wvTeqwdS5aVnFsCMORESAQtcmNLOFJEmqKeQhOHj6pooJ3%2BCOyEOKfBUk1CyYf%2BMytUkOAIRzhNWO%2FZdh%2F5bpnBGLlyrXy%2BrzKPYrZEcDHX1%2Be9OJUsawsOGhW%2FENyf61Ze77B5AnG0XvHjylflsULh%2BH2JZfyYIgajSxHg9XmQ6VZvABGVsCPUgcleULy%2Bx7TU21Pg2NKVUy9IUpSCBrckto%2FMq%2BstDzf%2FmW%2BfvK8aPhr4A8zzYvMLXF0L3IA3WyvQ91mI%2F2B%2BhsD3llWfsmZJUxqZ5gsy6IUpglUJ4%2BMqVn7UfxG0zUZ3ceEcg0JpLjxt2i24NTLEPtXDgCKrvWGtydaB0uaNwNP0QagC5XG2Onxk2HRSK5u5oapkbxLL8v0KDpDrMefKEBfwhryg7sUz%2B6px6B6rqJ3rled7rLgngQ0VYunh6xysSbHA2uS7%2FIkJGz0e%2FdVQ7y7UFWSthoebpZddIPjdoDBBOpJRxb7qgUwrJ%2B6YfidNbBxT0dgubSnPcOccTQXtDjjV%2F2sMNzw7tQGOqUBdEHngMPMYmWQ%2F0qbUFW0vBtpeXnBAgZ9CnRi3Ex3nLLbm6lOat8WL5m925ADEbfpQGIh8aiwVlg%2F2WoTwWHEov%2BkXlesytMoaeO3dZmPDHL4McMYB%2FkOD%2BMaHzTTKUyEq%2BSdOiknan6ZD9hsClJ9h7ZljXIu7N3rmRVERzMmJMAqanlwurOXOCLQIP7nERJ2jTf%2BahfbrWIgp7c7Ux2kvRucN2CW&X-Amz-Signature=ae1c8b34dd6ccee842f67ddb7df36a07bafbedf6d3e4265299d30d085e9b25dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
  }
];

export const STATIC_CASES_COPY = STATIC_CASES;
export let DESIGN_CASES = STATIC_CASES;

try {
  const res = await fetch('/api/notion');
  if (res.ok) {
    const data = await res.json();
    if (data && data.length > 0) {
      DESIGN_CASES = data;
    }
  }
} catch (e) {
  console.warn("Failed to fetch from Notion API, using static fallback data.", e);
}
