import { faker } from "@faker-js/faker"

import { db } from "@/database/common/database"
import { userRoleColumn, usersTable } from "@/database/schema/user.schema"

const seed = async () => {
  const USERS_AMOUNT = 100
  await db
    .insert(usersTable)
    .values(
      new Array(USERS_AMOUNT)
        .fill(null)
        .map<typeof usersTable.$inferInsert>(() => ({
          email: faker.internet.email(),
          role: faker.helpers.arrayElement(userRoleColumn.enumValues),
        }))
    )
    .onConflictDoNothing({ target: usersTable.id })
}
seed()
