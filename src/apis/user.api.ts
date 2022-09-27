import { ARFactory } from '.'

export type findUserDto = {
  uid?: string
  email?: string
  username?: string
  keyword?: string
}

export type findUserResultDto = {
  uid: string
  email: string
  username: string
  avatar: string
  sign: string
}

export function searchUser({ uid, email, username, keyword }: findUserDto) {
  return ARFactory<findUserResultDto[]>({
    url: '/user',
    method: 'GET',
    params: { uid, email, username, keyword }
  })
}
