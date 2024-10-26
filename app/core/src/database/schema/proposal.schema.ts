import {
  integer,
  pgEnum,
  pgTable,
  real,
  text,
  varchar,
} from "drizzle-orm/pg-core"

import { usersTable } from "@/database/schema/user.schema"
import { enumProposalRole } from "@/domain/proposals/common/proposal-type.enum"

export const proposalTypeColumn = pgEnum(
  "type",
  Object.values(enumProposalRole) as [string]
)

export const proposalsTable = pgTable("proposals", {
  authorId: integer()
    .references(() => usersTable.id)
    .notNull(),
  description: text().notNull(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  salary: real().notNull(),
  title: varchar().notNull(),
  type: proposalTypeColumn().$type<enumProposalRole>().notNull(),
})
