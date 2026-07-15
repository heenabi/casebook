import { Client } from "@notionhq/client";
import { DESIGN_CASES } from "./cases-data.js";

// ── 정적 데이터 검색 (실제 디자인 사례 DB) ──────────────────────────────────

export function searchCases(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) throw new Error("검색어를 입력해 주세요.");

  const results = DESIGN_CASES.filter((c) =>
    c.text.toLowerCase().includes(normalized)
  );

  return {
    query,
    matchCount: results.length,
    results: results.map((c) => ({
      database: "실제 디자인 사례 DB",
      id: c.id,
      url: c.출처,
      text: c.text,
      properties: c,
    })),
  };
}

export function listCases(limit = 20) {
  const entries = DESIGN_CASES.slice(0, Math.min(limit, DESIGN_CASES.length));
  return {
    database: "실제 디자인 사례 DB",
    count: entries.length,
    total: DESIGN_CASES.length,
    entries: entries.map((c) => ({ id: c.id, url: c.출처, text: c.text, properties: c })),
  };
}

function getNotionClient() {
  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) {
    throw new Error(
      "NOTION_API_KEY가 없습니다. .env 파일에 API 키를 넣어 주세요."
    );
  }
  return new Client({ auth: apiKey });
}

function getDatabaseIds() {
  const id1 =
    process.env.NOTION_DATABASE_ID_1 || process.env.NOTION_DATABASE_ID;
  const id2 = process.env.NOTION_DATABASE_ID_2;

  if (!id1) {
    throw new Error(
      "NOTION_DATABASE_ID가 없습니다. .env 파일에 데이터베이스 ID를 넣어 주세요."
    );
  }

  const ids = { "1": id1 };
  if (id2) ids["2"] = id2;
  return ids;
}

async function getDataSourceId(notion, databaseId) {
  const database = await notion.databases.retrieve({ database_id: databaseId });

  if (!database.data_sources?.length) {
    throw new Error("데이터베이스에서 데이터 소스를 찾지 못했습니다.");
  }

  return database.data_sources[0].id;
}

function extractTextFromRichText(richTextArray) {
  if (!richTextArray || richTextArray.length === 0) return "";
  return richTextArray.map((item) => item.plain_text).join("");
}

function formatPropertyValue(property) {
  if (!property) return "";

  switch (property.type) {
    case "title":
      return extractTextFromRichText(property.title);
    case "rich_text":
      return extractTextFromRichText(property.rich_text);
    case "number":
      return property.number !== null ? String(property.number) : "";
    case "select":
      return property.select?.name ?? "";
    case "multi_select":
      return property.multi_select.map((item) => item.name).join(", ");
    case "status":
      return property.status?.name ?? "";
    case "date": {
      if (!property.date) return "";
      const start = property.date.start ?? "";
      const end = property.date.end ? ` ~ ${property.date.end}` : "";
      return start + end;
    }
    case "checkbox":
      return property.checkbox ? "예" : "아니오";
    case "url":
      return property.url ?? "";
    case "email":
      return property.email ?? "";
    case "phone_number":
      return property.phone_number ?? "";
    case "formula":
      return formatFormulaValue(property.formula);
    case "rollup":
      return formatRollupValue(property.rollup);
    case "relation":
      return property.relation.map((item) => item.id).join(", ");
    case "people":
      return property.people.map((person) => person.name || person.id).join(", ");
    case "files":
      return property.files
        .map((file) => file.name || file.external?.url || file.file?.url || "")
        .join(", ");
    case "created_time":
      return property.created_time ?? "";
    case "last_edited_time":
      return property.last_edited_time ?? "";
    case "created_by":
    case "last_edited_by":
      return property[property.type]?.name || property[property.type]?.id || "";
    default:
      return "";
  }
}

function formatFormulaValue(formula) {
  if (!formula) return "";
  switch (formula.type) {
    case "string":
      return formula.string ?? "";
    case "number":
      return formula.number !== null ? String(formula.number) : "";
    case "boolean":
      return formula.boolean ? "예" : "아니오";
    case "date":
      return formula.date?.start ?? "";
    default:
      return "";
  }
}

function formatRollupValue(rollup) {
  if (!rollup) return "";
  if (rollup.type === "number") {
    return rollup.number !== null ? String(rollup.number) : "";
  }
  if (rollup.type === "array") {
    return rollup.array
      .map((item) => {
        if (item.type === "title") return extractTextFromRichText(item.title);
        if (item.type === "rich_text") return extractTextFromRichText(item.rich_text);
        return "";
      })
      .filter(Boolean)
      .join(", ");
  }
  return "";
}

export function pageToReadableObject(page) {
  const properties = {};
  let allText = "";

  for (const [name, property] of Object.entries(page.properties)) {
    const value = formatPropertyValue(property);
    properties[name] = value;
    if (value) {
      allText += `${name}: ${value}\n`;
    }
  }

  return {
    id: page.id,
    url: page.url,
    created_time: page.created_time,
    last_edited_time: page.last_edited_time,
    properties,
    text: allText.trim(),
  };
}

async function fetchAllPagesFromDatabase(notion, databaseId) {
  const dataSourceId = await getDataSourceId(notion, databaseId);
  const pages = [];
  let cursor = undefined;

  do {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      start_cursor: cursor,
      page_size: 100,
    });

    pages.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return pages;
}

export async function getDatabaseInfo(databaseKey) {
  const notion = getNotionClient();
  const databaseIds = getDatabaseIds();
  const databaseId = databaseIds[databaseKey];

  if (!databaseId) {
    throw new Error(
      databaseKey === "2"
        ? "두 번째 데이터베이스가 설정되어 있지 않습니다."
        : `데이터베이스 번호는 1 또는 2만 사용할 수 있습니다.`
    );
  }

  const database = await notion.databases.retrieve({ database_id: databaseId });
  const title = extractTextFromRichText(database.title);
  const dataSourceId = await getDataSourceId(notion, databaseId);
  const dataSource = await notion.dataSources.retrieve({
    data_source_id: dataSourceId,
  });

  const propertyNames = Object.entries(dataSource.properties).map(
    ([name, property]) => `${name} (${property.type})`
  );

  return {
    databaseKey,
    id: database.id,
    title: title || `데이터베이스 ${databaseKey}`,
    properties: propertyNames,
  };
}

export async function listDatabaseEntries(databaseKey, limit = 20) {
  const notion = getNotionClient();
  const databaseIds = getDatabaseIds();
  const databaseId = databaseIds[databaseKey];

  if (!databaseId) {
    throw new Error(`데이터베이스 번호는 1 또는 2만 사용할 수 있습니다.`);
  }

  const dataSourceId = await getDataSourceId(notion, databaseId);

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    page_size: Math.min(limit, 100),
  });

  const info = await getDatabaseInfo(databaseKey);

  return {
    database: info.title,
    count: response.results.length,
    entries: response.results.map(pageToReadableObject),
  };
}

export async function searchNotion(query, databaseKey = "both") {
  const notion = getNotionClient();
  const databaseIds = getDatabaseIds();
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    throw new Error("검색어를 입력해 주세요.");
  }

  const keysToSearch =
    databaseKey === "both" ? Object.keys(databaseIds) : [databaseKey];

  const results = [];

  for (const key of keysToSearch) {
    const databaseId = databaseIds[key];
    if (!databaseId) continue;

    const pages = await fetchAllPagesFromDatabase(notion, databaseId);
    const info = await getDatabaseInfo(key);

    for (const page of pages) {
      const readable = pageToReadableObject(page);
      if (readable.text.toLowerCase().includes(normalizedQuery)) {
        results.push({
          database: info.title,
          databaseKey: key,
          ...readable,
        });
      }
    }
  }

  return {
    query,
    matchCount: results.length,
    results,
  };
}

export async function getPageById(pageId) {
  const notion = getNotionClient();
  const page = await notion.pages.retrieve({ page_id: pageId });
  return pageToReadableObject(page);
}
