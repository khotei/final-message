import * as process from "node:process"

import { type Config, defineConfig } from "drizzle-kit"

const { PG_URL } = process.env
if (!PG_URL) throw new Error("PG_URL is not defined.")

const drizzleConfig: Config = {
  casing: "snake_case",
  dbCredentials: {
    url: PG_URL,
  },
  dialect: "postgresql",
  out: "./src/database/migrations",
  schema: "./src/database/schema",
}

export const pgUrl = PG_URL

export default defineConfig(drizzleConfig)
