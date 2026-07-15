import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  getDatabaseInfo,
  listDatabaseEntries,
  searchNotion,
  getPageById,
  searchCases,
  listCases,
} from "./notion.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: join(__dirname, "..", ".env") });

const server = new McpServer({
  name: "notion-mcp-server",
  version: "1.0.0",
});

server.registerTool(
  "search_notion",
  {
    title: "노션 검색",
    description:
      "노션 데이터베이스에서 검색어와 관련된 항목을 찾습니다. 질문에 답할 때 가장 먼저 사용하세요.",
    inputSchema: {
      query: z.string().describe("찾고 싶은 키워드나 질문"),
      database: z
        .enum(["1", "2", "both"])
        .optional()
        .describe("검색할 데이터베이스 (1, 2, both 중 하나. 기본값: both. DB가 하나면 both와 1은 같음)"),
    },
  },
  async ({ query, database = "both" }) => {
    try {
      const result = await searchNotion(query, database);

      if (result.matchCount === 0) {
        return {
          content: [
            {
              type: "text",
              text: `"${query}"와(과) 일치하는 항목을 찾지 못했습니다.`,
            },
          ],
        };
      }

      const summary = result.results
        .map((entry, index) => {
          return [
            `--- 결과 ${index + 1} ---`,
            `데이터베이스: ${entry.database}`,
            `페이지 ID: ${entry.id}`,
            `링크: ${entry.url}`,
            entry.text,
          ].join("\n");
        })
        .join("\n\n");

      return {
        content: [
          {
            type: "text",
            text: `검색어: "${query}"\n총 ${result.matchCount}개 항목을 찾았습니다.\n\n${summary}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `오류: ${error.message}` }],
        isError: true,
      };
    }
  }
);

server.registerTool(
  "list_notion_entries",
  {
    title: "노션 목록 보기",
    description: "노션 데이터베이스에 있는 항목 목록을 가져옵니다.",
    inputSchema: {
      database: z
        .enum(["1", "2"])
        .describe("볼 데이터베이스 번호 (1 또는 2)"),
      limit: z
        .number()
        .optional()
        .describe("가져올 항목 개수 (기본값: 20, 최대: 100)"),
    },
  },
  async ({ database, limit = 20 }) => {
    try {
      const result = await listDatabaseEntries(database, limit);

      const summary = result.entries
        .map((entry, index) => {
          return [`--- 항목 ${index + 1} ---`, entry.text].join("\n");
        })
        .join("\n\n");

      return {
        content: [
          {
            type: "text",
            text: `데이터베이스: ${result.database}\n항목 수: ${result.count}\n\n${summary}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `오류: ${error.message}` }],
        isError: true,
      };
    }
  }
);

server.registerTool(
  "get_notion_database_info",
  {
    title: "노션 DB 정보",
    description: "노션 데이터베이스 이름과 컬럼(속성) 목록을 확인합니다.",
    inputSchema: {
      database: z
        .enum(["1", "2"])
        .describe("확인할 데이터베이스 번호 (1 또는 2)"),
    },
  },
  async ({ database }) => {
    try {
      const info = await getDatabaseInfo(database);

      return {
        content: [
          {
            type: "text",
            text: [
              `데이터베이스: ${info.title}`,
              `ID: ${info.id}`,
              `컬럼 목록:`,
              ...info.properties.map((name) => `- ${name}`),
            ].join("\n"),
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `오류: ${error.message}` }],
        isError: true,
      };
    }
  }
);

server.registerTool(
  "get_notion_page",
  {
    title: "노션 페이지 상세",
    description: "페이지 ID로 노션 항목 하나의 상세 내용을 가져옵니다.",
    inputSchema: {
      page_id: z.string().describe("노션 페이지 ID"),
    },
  },
  async ({ page_id }) => {
    try {
      const page = await getPageById(page_id);

      return {
        content: [
          {
            type: "text",
            text: [`링크: ${page.url}`, page.text].join("\n\n"),
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `오류: ${error.message}` }],
        isError: true,
      };
    }
  }
);

server.registerTool(
  "search_design_cases",
  {
    title: "디자인 사례 검색",
    description:
      "실제 디자인 사례 DB에서 키워드로 사례를 검색합니다. 회사명, 도메인, 문제카테고리, 결정 내용, 근거, 결과 등 전체 필드를 대상으로 검색합니다.",
    inputSchema: {
      query: z.string().describe("찾고 싶은 키워드 (예: 전환율, 토스, 가입, 핀테크)"),
    },
  },
  async ({ query }) => {
    try {
      const result = searchCases(query);

      if (result.matchCount === 0) {
        return {
          content: [
            {
              type: "text",
              text: `"${query}"와(과) 일치하는 디자인 사례를 찾지 못했습니다.`,
            },
          ],
        };
      }

      const summary = result.results
        .map((entry, index) => {
          return [`--- 사례 ${index + 1} ---`, `출처: ${entry.url}`, entry.text].join("\n");
        })
        .join("\n\n");

      return {
        content: [
          {
            type: "text",
            text: `검색어: "${query}"\n총 ${result.matchCount}개 사례를 찾았습니다.\n\n${summary}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `오류: ${error.message}` }],
        isError: true,
      };
    }
  }
);

server.registerTool(
  "list_design_cases",
  {
    title: "디자인 사례 목록",
    description: "실제 디자인 사례 DB의 전체 항목 목록을 가져옵니다.",
    inputSchema: {
      limit: z
        .number()
        .optional()
        .describe("가져올 항목 개수 (기본값: 20, 최대: 전체)"),
    },
  },
  async ({ limit = 20 }) => {
    try {
      const result = listCases(limit);

      const summary = result.entries
        .map((entry, index) => {
          return [`--- 사례 ${index + 1} ---`, entry.text].join("\n");
        })
        .join("\n\n");

      return {
        content: [
          {
            type: "text",
            text: `실제 디자인 사례 DB (전체 ${result.total}건 중 ${result.count}건 표시)\n\n${summary}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `오류: ${error.message}` }],
        isError: true,
      };
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("서버 시작 실패:", error);
  process.exit(1);
});
