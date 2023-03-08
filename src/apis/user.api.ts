import { ARFactory } from '.'
import { findUserDto, findUserResultDto } from '../types/user.type'

export function searchUser({ uid, email, username, keyword }: findUserDto) {
  return ARFactory<findUserResultDto[]>({
    url: '/user',
    method: 'GET',
    params: { uid, email, username, keyword }
  })
}
