import { integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core"

import { enumUserRole } from "@/users/common/user-role.enum"

export const userRoleColumn = pgEnum(
  "role",
  Object.values(enumUserRole) as [string]
)

export const usersTable = pgTable("users", {
  email: varchar().unique(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  role: userRoleColumn(),
})
