import { enumProposalRole } from "@/domain/proposals/common/proposal-type.enum"
import { enumUserRole } from "@/domain/users/common/user-role.enum"

export const getUserProposalType = ({
  userRole,
}: {
  userRole: enumUserRole
}): enumProposalRole => {
  switch (userRole) {
    case enumUserRole.CANDIDATE:
      return enumProposalRole.RESUME
    case enumUserRole.HR:
      return enumProposalRole.VACANCY
    default:
      throw new Error("Invalid user role")
  }
}
