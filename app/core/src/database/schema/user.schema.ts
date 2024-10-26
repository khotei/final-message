import { integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core"

export const enumUserRome = pgEnum("role", ["hr", "candidate"])

export const users = pgTable("users", {
  email: varchar().unique(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  role: enumUserRome(),
})
