import { zValidator } from "@hono/zod-validator"
import { eq } from "drizzle-orm"
import { Hono } from "hono"
import { z } from "zod"

import { db } from "@/database/common/database"
import { proposalsTable } from "@/database/schema/proposal.schema"
import { enumProposalRole } from "@/domain/proposals/common/proposal-type.enum"

export const proposalsApi = new Hono()

proposalsApi.get(
  "/proposals",
  zValidator(
    "query",
    z.object({
      type: z.nativeEnum(enumProposalRole),
    })
  ),
  async (ctx) => {
    const query = ctx.req.valid("query")
    const proposals = await db
      .select()
      .from(proposalsTable)
      .where(eq(proposalsTable.type, query.type))
    return ctx.json(proposals)
  }
)
