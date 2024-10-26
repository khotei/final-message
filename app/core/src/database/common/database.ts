import { drizzle } from "drizzle-orm/node-postgres"

import { pgUrl } from "@/database/common/drizzle.config"

export const db = drizzle(pgUrl)
