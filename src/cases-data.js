// 실제 디자인 사례 DB — CSV에서 변환된 정적 데이터 (총 22건)
let STATIC_CASES = [
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/95a1ffdd-1250-4a08-a01e-097503907850/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=c49bd0c443df6103cb520a39ac8ea7804df7096d1bef79781afce118b1769ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/4c84a8ff-b90b-462d-acd3-029405a3e6c0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=1c4dd8648576499272fde86927b3c799a12f0ab6510ff208e5752603dc0563bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/90263b3d-c81a-45c0-b9f0-13ef7fd925ca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=aec31a313888cb2afbb2225602e9d203b2283f1e4d4ca1b2b357a022362cea61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/041a4900-d25a-4a36-8df9-2b5fbb72f296/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=eb57160ac1d28110ee6a57b7d8e30b3667a6078739f345636e591d7815dae242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/d6589f12-e6cd-44cc-864c-b409bebf2c8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.58.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=2eaf266c4d87d44b684b097e6fe0c46f44b5f2775ac7f6ca07f4b2de947222af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/0ce27ae2-9967-49e5-9c59-5ee1b7e740f7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=196b679bf6b309c8b7553ae1097ab9763ea64564a79e321ffa685ffb592f248d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/a40b63cf-0bb6-45ec-84bd-454e2358b7d4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=e844b87adbe830e9601bb349ca7774784d6d1b0e9fcd1249515c60627e48493c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/d2eed95a-8366-41dd-ab12-8faba2783c57/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=7615d82764b1a088ed6df775353848ada8c0f05041d7e27428d8646236f2e1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/75625d43-7594-4ad9-a67a-78ed331a0180/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=be52f72375926c86cecdec82d1be98ed489f56f77621bd7b6c7e85f8734b3290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/c4010c5c-c6ce-4a59-8a88-b44d8bbee064/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.54.07.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=42e55f61dd917aa399b5979285f3ea6a596c0aa1901a13d68396fa64590dc9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/011536f6-81a9-4886-8865-a5f994e1d055/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.53.26.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=0d8b497c60fa15ae742b05e382f03fd3356d12e1cfc288b6ca707a6b4c2b6df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/a5d09987-03e9-42d7-9a44-1c22dc8da2a0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.51.00.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=302e08d2e1a4858da013dd2204c930baae9c6870031e99c8bdef544ab1f48693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/7c2c4945-d5e3-4d1c-a131-b8e76fd7757b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.50.31.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=fefb36e434ecfca4526309721dbc08e677bc61ed0b3b8b7111f8d53236c3ab35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/5a24b27a-ac59-4ef3-9f6c-e9bec9e54d63/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.49.51.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=4f6342a5ad49ef74cbda127dd87be2a545d2c2c0da038f9313c85644cbe0f9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/fe15a8d7-50de-4bf7-bbe0-02b6d5d69bfd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.48.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=565e13fac406d87fec723e990d7f33d60b7a7b359e495c4bff128475f36552bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/868c63b9-981e-432b-8dd9-f6e69492bf37/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.47.56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=81b9b97cca18020d44186a036eb830075bbd91ebeb123ce96fce8ccb86cfe36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/a4ba43ed-19c7-494c-ae5f-1cacec1a1606/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.47.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=79894ec9310a1d30d6135fc07b5a2779ad004c07c2e85068c16b7d3a9b31af0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/7a9a490c-4a65-4ca2-9b15-95bbdf89bb9d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.46.23.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=ac5658fbba29be79728907856edac6f7844f1d387807545065bed37d01d10b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/f3d9c02e-fad8-4e75-9a2b-b226f3934756/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.45.35.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=6300d0747e4a3be073bb8eb61bbe3dd487b521af05c10edc90a71730d22c7308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/84679c68-1966-417d-bd74-00aecc57931d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.44.43.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=e286358bd0d6e7ac87b915582dee66b1a0de8947d104911341f007db1a854382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/63da4f4d-165d-4503-8f18-c2afc713c602/%E1%84%90%E1%85%A9%E1%84%89%E1%85%B3_%E1%84%8B%E1%85%AC%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB_%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5_%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC_%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=d0b248450cb6e3a666c9c5452a47f425387e5d2659e9102ce6f80b626432f466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
    "이미지": "https://prod-files-secure.s3.us-west-2.amazonaws.com/6ac5c595-d1d3-405e-9148-349f5464694d/0222dac3-af27-4526-a57e-16f6de7a82f6/%E1%84%90%E1%85%A9%E1%84%89%E1%85%B3_%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8_%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC_%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EHVKOP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T133558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDAjVaKDWAj8UfEIPuBoDamsNZJ2NKudPh99HREQc6ZawIgKxWBbytTa2c5mBDgk5zBD5OMngwzKvK2ql7WYH5W9vcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKYn7YfuLos5kLuXircA%2BDC8igiinFmlV5sEObg%2BjkrytJY%2BI3Uto1LByk9xeop5bVNy87MEZIyLFY%2BmLQqEBn7UMvdZijpwX0QAwFsFVgsTBnxGKg6CaHtCxfNUY22nnDF9fblUfVvi5tJS%2F2O1PGlPKiiAX0s75gdII4CwnJjgQ5miuOzoLZlGKB%2FSexLvKl3mgnCWAtENNtUpMRWteexsnEtw5FAO5yF4%2BceXC623nWQUSfQlIyIlDfMgzOVxIh4OyEAW9uqBJYgOgnO8Ad6wxKTAjcPCM1JqCkWvZ1x8rgc6%2BRMT9BOjgudNwLMXW84BfhHiY9t1N4TCZOHA2Te9I6B6tn7VObsZgsB8VTvAxrIq%2BKjpgTZsw8UPfhpEl%2BUSQ1g%2FMxLt7%2BIwL1J5XBfaltIxcAw1zfjz4NLZOsYsIqQBPB3FVQnPWFYAqAVdN7IDwOQpkLmmP0R6zevRMMZ0fqn5mMQ7wGk6yD4apsDvOE5RELCqEFmlBFc4y3Dhkly7UTOoEC1qdXk%2Bls4wLalhYpo5dTR%2FkvEC9r5RPsAjCoSBzE5qOvEw96%2FutaZDXUKSETG7ciXjHdm0Q2%2Bzwu9R3CZOfNu1D7Z2d%2BU2UYTVfNyrXOQGk%2FjC8%2FquHNxDmwQdWEh4sVZBfb9MMCpiNMGOqUBOZVj4358VbSLX5tpCOUCKSOusrehIpC6cbN7tcUpecrNVQ0F0zjrWSm0MYGkK039wusBms26y0%2Boh%2FLps4JqXD8l9NXoUhQNxdXM4M5ej853%2FLIz2uS%2Bv93MEXKA88V%2FrndvRB1zB26KKKnWQFD%2FDoqoy5FqxLLp0IBsL9xmCd01LEWHCfOCth1KO4HJpoJ5tzUOw%2BZWW9h9RB%2FmINHIiMqFONJC&X-Amz-Signature=d8ad719f4d2c8aa31a153c6fc378fc4f6df9940c16bf7ae6107f9b5dec0c6b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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
