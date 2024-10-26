import * as process from "node:process"

import { type Config, defineConfig } from "drizzle-kit"

const getPgUrl = () => {
  const DEFAULT_PG_URL = "postgres://test:test@localhost:5432/hirely"
  let pgUrl = DEFAULT_PG_URL
  if (process.env.PG_URL) {
    pgUrl = process.env.PG_URL
  }
  return pgUrl
}
export const pgUrl = getPgUrl()

const drizzleConfig: Config = {
  casing: "snake_case",
  dbCredentials: {
    url: pgUrl,
  },
  dialect: "postgresql",
  out: "./src/database/migrations",
  schema: "./src/database/schema",
}

export default defineConfig(drizzleConfig)
