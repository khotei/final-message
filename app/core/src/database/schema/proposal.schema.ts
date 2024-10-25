import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core"

import { enumProposalRole } from "@/domain/proposals/common/proposal-type.enum"

export const proposalTypeColumn = pgEnum(
  "type",
  Object.values(enumProposalRole) as [string]
)

export const proposalsTable = pgTable("proposals", {
  description: text().notNull(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  type: proposalTypeColumn().notNull(),
})
