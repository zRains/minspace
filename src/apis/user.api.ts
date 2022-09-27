import { ARFactory } from '.'

type findUserDto = {
  uid?: string
  email?: string
  username?: string
  keyword?: string
}

export default function searchUser({ uid, email, username, keyword }: findUserDto) {
  return ARFactory({
    url: '/user',
    method: 'GET',
    params: { uid, email, username, keyword }
  })
}
