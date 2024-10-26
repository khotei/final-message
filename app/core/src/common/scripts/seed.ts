import { faker } from "@faker-js/faker"

import { db } from "@/database/common/database"
import { proposalsTable } from "@/database/schema/proposal.schema"
import { usersTable } from "@/database/schema/user.schema"
import { getUserProposalType } from "@/domain/proposals/utils/proposal-type-helpers"
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
              authorId: user.id,
              description: faker.lorem.paragraph({ max: 8, min: 2 }),
              salary: parseFloat(
                faker.commerce.price({
                  max: 12000,
                  min: 2000,
                })
              ),
              title: faker.lorem.sentence({ max: 4, min: 2 }),
              type: getUserProposalType({
                userRole: user.role,
              }),
            }))
        )
        .onConflictDoNothing({ target: proposalsTable.id })
    )
  )
}
seed()
