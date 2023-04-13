import type { findUserDto, findUserResultDto } from '@type/user.type'
import { ARFactory } from '.'

export function searchUser({ uid, email, username, keyword }: findUserDto) {
  return ARFactory<findUserResultDto[]>({
    url: '/user',
    method: 'GET',
    params: { uid, email, username, keyword }
  })
}
