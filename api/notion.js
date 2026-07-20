export default async function handler(req, res) {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    return res.status(500).json({ error: "Notion API Key or Database ID is missing in environment variables." });
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: "Failed to fetch from Notion", details: errorData });
    }

    const data = await response.json();

    const FALLBACK_IMAGES = {
      "가입 과정 개선": "https://static.toss.im/simplicity23/graphics/sim23-signup-og.png",
      "외국인 유저 인증 개선": "https://static.toss.im/ml-illust/spq0kqa82fmyu5jp7ruvbhkd-resize.png",
      "29CM 스타일 온보딩 — 룩북 선택으로 가입·구매 전환율 동시 개선": "https://ik.imagekit.io/jayyoungjunkim/thumb/29cm_style-onboarding_thumb.png?updatedAt=1746955895655",
      "라프텔 멤버십 구매 버튼 레이블 개선 — 클릭률 20%→50%": "https://blog.laftel.net/api/image?type=post-property&pageId=21d3f992-bb7e-8003-aae7-f92a2dc2f232&propertyId=x%3Cjj",
      "강남언니 일본 로그인 화면 개선 — 실패를 통해 배우는 A/B 테스트": "https://blog.gangnamunni.com/contents/posts/224d9338-d3d4-8072-a11d-d28bb783c01a/cover/20210217.jpeg",
      "배민 온라인 입점신청 개선 — OCR 도입과 퍼널 축소": "https://techblog.woowa.in/wp-content/uploads/2024/12/PM-디자이너-개발자가-함께한-배달의민족-입점-과정-개선기.png",
      "B마트 테마관(신선관·뷰티관) 탐색 편의성 개선": "https://techblog.woowa.in/wp-content/uploads/2024/07/B마트-테마관-개선기-오픈이-끝_-No-함께하는-동료들과-프로덕트-꾸준히-발전시키기.png"
    };

    const cases = data.results.map(page => {
      const props = page.properties;
      
      const getValue = (keyVariants) => {
        for (const key of keyVariants) {
          if (props[key]) {
            const prop = props[key];
            if (prop.type === 'title') return prop.title.map(t => t.plain_text).join('');
            if (prop.type === 'rich_text') return prop.rich_text.map(t => t.plain_text).join('');
            if (prop.type === 'select') return prop.select ? prop.select.name : "";
            if (prop.type === 'multi_select') {
              return prop.multi_select.map(s => s.name);
            }
            if (prop.type === 'url') return prop.url || "";
            if (prop.type === 'date') return prop.date ? prop.date.start : "";
            if (prop.type === 'files') return prop.files && prop.files.length > 0 ? (prop.files[0].file?.url || prop.files[0].external?.url || "") : "";
            if (prop.type === 'number') return prop.number !== null ? String(prop.number) : "";
          }
        }
        return "";
      };

      const domainRaw = getValue(["도메인", "Domain"]);
      const domainStr = Array.isArray(domainRaw) ? domainRaw.join(", ") : domainRaw;
      
      const catRaw = getValue(["문제 카테고리", "문제카테고리", "카테고리", "Category"]);
      const catArr = Array.isArray(catRaw) ? catRaw : (catRaw ? catRaw.split(",").map(s => s.trim()) : []);

      const resultData = {
        id: page.id,
        제목: getValue(["제목", "Title", "Name"]),
        회사: getValue(["회사", "Company"]),
        도메인: domainStr,
        문제카테고리: catArr,
        상황제약: getValue(["상황/제약", "상황제약", "상황", "Constraint"]),
        요약: getValue(["요약", "한 줄 요약", "Summary"]),
        문제: getValue(["문제", "Problem"]),
        결정: getValue(["결정", "Decision"]),
        근거: getValue(["근거", "Reason"]),
        결과: getValue(["결과", "Result"]),
        출처: getValue(["출처", "Link", "URL"]),
        날짜: getValue(["날짜", "Date"])
      };
      
      let finalImg = getValue(["이미지", "썸네일", "Image", "Thumbnail"]);
      if (!finalImg) {
        finalImg = FALLBACK_IMAGES[resultData.제목] || "";
      }
      resultData.이미지 = finalImg;
      
      return resultData;
    });

    // filter out empty title cases
    const validCases = cases.filter(c => c.제목.trim() !== "");

    // --- Lazy AI Processing ---
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const casesToProcess = validCases.filter(c => !c.요약 || c.요약.trim() === "-" || c.요약.trim() === "");

    if (GEMINI_API_KEY && casesToProcess.length > 0) {
      try {
        // We'll process them in one batch to save time
        const prompt = `You are an expert UX writing assistant. Rewrite the following design cases in Korean.
For each case, provide:
1. "요약": A 1-line summary using polite, kind, and friendly tone (존댓말, ~했습니다, 자상하고 친절한 어투). DO NOT use exclamation marks (!).
2. "문제", "결정", "근거", "결과": Rewrite using easy-to-understand language, active voice, and short sentences.

Return ONLY a JSON array of objects, strictly in the same order, with keys: "id", "요약", "문제", "결정", "근거", "결과".

Data to process:
${JSON.stringify(casesToProcess.map(c => ({ id: c.id, title: c.제목, problem: c.문제, decision: c.결정, reason: c.근거, result: c.결과 })), null, 2)}
`;

        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
          })
        });

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const text = geminiData.candidates[0].content.parts[0].text;
          const processedArray = JSON.parse(text);

          // Merge back into validCases and update Notion
          for (const processed of processedArray) {
            const targetCase = validCases.find(c => c.id === processed.id);
            if (targetCase) {
              targetCase.요약 = processed.요약;
              targetCase.문제 = processed.문제;
              targetCase.결정 = processed.결정;
              targetCase.근거 = processed.근거;
              targetCase.결과 = processed.결과;

              // Fire-and-forget PATCH to Notion (doesn't block response too long)
              fetch(`https://api.notion.com/v1/pages/${processed.id}`, {
                method: "PATCH",
                headers: {
                  "Authorization": `Bearer ${NOTION_API_KEY}`,
                  "Notion-Version": "2022-06-28",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  properties: {
                    "요약": { rich_text: [{ text: { content: processed.요약 } }] },
                    "문제": { rich_text: [{ text: { content: processed.문제 } }] },
                    "결정": { rich_text: [{ text: { content: processed.결정 } }] },
                    "근거": { rich_text: [{ text: { content: processed.근거 } }] },
                    "결과": { rich_text: [{ text: { content: processed.결과 } }] }
                  }
                })
              }).catch(e => console.error("Notion PATCH failed:", e));
            }
          }
        }
      } catch (e) {
        console.error("Gemini API processing failed:", e);
      }
    }

    return res.status(200).json(validCases);
  } catch (error) {
    console.error("Notion API error:", error);
    return res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
}
