import { bindings, defineConfig, defineWorker } from "cf/config";

// 로컬 개발: .env 의 DATABASE_URL 을 읽음 (.env 는 커밋 안 함, 없으면 그냥 넘어감)
try {
  process.loadEnvFile();
} catch {}

export default defineConfig({
  worker: defineWorker({
    name: "wuwa-portfolio",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-25",
    // postgres.js(DB 드라이버)가 Node 의 net/tls 등을 씀
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      // Neon DB 연결. id 는 `npx wrangler hyperdrive create` 가 알려 주는 값 (비밀번호 아님, 커밋해도 됨)
      // 로컬 개발은 Hyperdrive 를 거치지 않고 .env 의 DATABASE_URL 로 Neon 에 바로 연결
      HYPERDRIVE: bindings.hyperdrive({
        id: "REPLACE_WITH_HYPERDRIVE_ID",
        dev: { connectionString: process.env.DATABASE_URL },
      }),
    },
  }),
});
