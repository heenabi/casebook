# Casebook 디자인 스펙 (DESIGN.md)

## 🎨 1. Colors (색상)

### Primary (Purple)
- **Purple (Default):** `#5d21d0`
- **Purple Light (Hover):** `#9165e5`
- **Purple Dark (Pressed):** `#441899`
- **Purple BG (Selected/Hover BG):** `#eee5ff`

### Grayscale
- **Black:** `#333333` (Label/Strong은 `#000000`)
- **Gray 01:** `#666666`
- **Gray 02:** `#999999`
- **Gray 05:** `#dddddd`
- **Gray 06:** `#eeeeee`
- **Gray 07:** `#f2f2f2`
- **Gray 08:** `#f9f9f9`
- **White:** `#ffffff`

### Semantic (Status)
- **Success:** `#03a900`
- **Error:** `#d72a2a`
- **Info:** `#03a9f4`

---

## 📝 2. Typography (타이포그래피)
- **Font Family:** Pretendard Variable (국문, 영문, 숫자 모두 적용)

| 명칭 | 크기 (Size) | 굵기 (Weight) | 행간 (Line Height) | 자간 (Letter Spacing) |
|---|---|---|---|---|
| **Title** | 24px | SemiBold | 34px | -0.5px |
| **Heading 1** | 20px | SemiBold | 28px | 0px |
| **Heading 2** | 18px | SemiBold | 24px | 0px |
| **Body 1** | 16px | SemiBold / Regular | 24px | -0.3px |
| **Body 2** | 14px | SemiBold / Regular | 20px | 0px |
| **Label / Caption** | 12px | SemiBold / Regular | 18px | 0px |

---

## 🧩 3. Components (컴포넌트 스펙)

### 3.1 Button (버튼)
**Size:**
- **Big:** Height `56px`, Padding `16px 20px`, Border Radius `12px`
- **Small:** Height `40px`, Padding `16px`, Border Radius `8px`

**States (Fill Type):**
- **Default:** BG `#5d21d0`, Text `#f9f9f9`
- **Hover:** BG `#9165e5`
- **Pressed:** BG `#441899`
- **Disabled:** BG `#999999`, Text `#dddddd`

**States (Line Type):**
- **Default:** Border `#5d21d0`, Text `#5d21d0`
- **Hover:** BG `#eee5ff`, Border `#9165e5`, Text `#5d21d0`
- **Pressed:** Border `#441899`, Text `#441899`
- **Disabled:** Border `#999999`, Text `#999999`

### 3.2 Filter (필터 칩)
- **Size:** Height `32px`, Padding `8px 12px`, Border Radius `16px`
- **States:**
  - **Unselect:** Border `#dddddd`, Text `#333333`
  - **Hover:** Border `#441899`, Text `#5d21d0`
  - **Select:** BG `#eee5ff`, Border `#9165e5`, Text `#333333`

### 3.3 Result Tag (결과 태그)
- **Size:** Height `24px`, Padding `6px`, Border Radius `8px`
- **Typography:** `12px` Regular, Line Height `18px`
- **States:**
  - **성공 (Success):** BG `#03a900`, Text `white`
  - **실패 (Fail):** BG `#d72a2a`, Text `white`
  - **진행중 (Ing):** BG `#03a9f4`, Text `white`

### 3.4 Toast (토스트 메시지)
- **Size:** Width `600px`, Height `48px`, Padding `12px 16px`, Border Radius `12px`
- **Color:** BG `#1c1e22` (Dark)
- **Content:** Icon (24px), Text (14px)

### 3.5 Top bar (상단바)
- **Size:** Height `64px`, Max-Width `1280px`
- **Layout:** Grid/Flex 구조로 메뉴 아이템 중앙 정렬
- **Menu Items:**
  - **Select (활성 상태):** `16px`, `SemiBold`, `Black (#333333)`, 행간 `24px`
  - **Unselect (비활성 상태):** `16px`, `Regular`, `Gray 01 (#666666)`, 행간 `24px`
- **Logo:** `64px` 높이 (좌측 `20px` 패딩 영역 내부 포함)

### 3.6 Case Card (검색 결과 콘텐츠)
- **Container:** Border Bottom `1px solid var(--gray_05)`, Width `100%`, Background `transparent`
- **Header:**
  - Company Row: Result Tag & Company Name (gap `8px`), Outlink Button (right aligned)
  - Title Row: Title (`H1_20_SB`) & Date (`12px Regular var(--gray_01)`), gap `8px`, Title flex-grows
  - Header Wrapper Padding: `0 24px`
- **Thumbnail & Summary Box (Side-by-side layout):**
  - Wrapper: Flex row, gap `12px`, Padding `24px 24px 0`, align-items `stretch`
  - Thumbnail (Left Col): Flex `3.5` (35%), Aspect Ratio `4 / 3`, Border Radius `12px`
  - Summary/Result Box (Right Col): Flex `6.5` (65%), Background `var(--gray_08)`, Border `1px solid var(--gray_05)`, Border Radius `12px`, Padding `16px`
    - Contains "한 줄 요약" and "결과" vertically stacked, gap `20px`
    - Title to Content gap: `4px`
    - Titles: `16px SemiBold var(--black)`, Content: `16px Regular var(--black)`
- **Width & Grid:** `1280px` max-width, 12 columns, `20px` gutter (gap).
- **Search view layout:** Centered layout.
- **Results view layout:**
  - **Left column (Filter):** Spans 3 columns (`grid-column: 1 / 4`)
  - **Right column (Content):** Spans 9 columns (`grid-column: 4 / 13`)
- **Details Section (Bottom Block):**
  - Wrapper: Flex column, Padding `0`, gap `0`
  - Sections (문제, 당시 상황, 결정, 근거) vertically stacked.
  - Titles: `14px SemiBold var(--black)`, Content: `14px Regular var(--gray_01)`
  - Section Padding: Top/Bottom `8px` gap between sections (Bottom margin `24px` before divider)
- **Divider:** Height `1px`, BG `var(--gray_06)`, Width `calc(100% - 64px)`
- **Action Area:** Padding `16px 32px`

---

## 🖼️ 4. Assets (에셋)
- **Logo:** `Logo.svg` 파일 사용 예정
