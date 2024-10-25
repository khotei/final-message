import { faker } from "@faker-js/faker"

import { db } from "@/database/common/database"
import { proposalsTable } from "@/database/schema/proposal.schema"
import { usersTable } from "@/database/schema/user.schema"
import { getProposalType } from "@/domain/proposals/utils/get-proposal-type"
import { enumUserRole } from "@/domain/users/common/user-role.enum"

const seed = async () => {
  const USERS_AMOUNT = 100
  const users = await db
    .insert(usersTable)
    .values(
      new Array(USERS_AMOUNT)
        .fill(null)
        .map<typeof usersTable.$inferInsert>(() => ({
          email: faker.internet.email(),
          role: faker.helpers.enumValue(enumUserRole),
        }))
    )
    .returning()
    .onConflictDoNothing({ target: usersTable.id })

  await Promise.all(
    users.map((user) =>
      db
        .insert(proposalsTable)
        .values(
          new Array(faker.helpers.rangeToNumber({ max: 3, min: 1 }))
            .fill(null)
            .map<typeof proposalsTable.$inferInsert>(() => ({
              description: faker.lorem.paragraph({ max: 8, min: 2 }),
              type: getProposalType({ userRole: user.role as enumUserRole }),
            }))
        )
        .onConflictDoNothing({ target: proposalsTable.id })
    )
  )
}
seed()
