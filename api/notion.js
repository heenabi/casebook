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

      return {
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
        날짜: getValue(["날짜", "Date"]),
        이미지: getValue(["이미지", "썸네일", "Image", "Thumbnail"])
      };
    });

    // filter out empty title cases
    const validCases = cases.filter(c => c.제목.trim() !== "");

    return res.status(200).json(validCases);
  } catch (error) {
    console.error("Notion API error:", error);
    return res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
}
