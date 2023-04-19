import { ARFactory } from '.'

// Types
import type { findUserScheme } from '@type/user.type'

export function searchUser<T = any>({ uid, email, username, keyword }: findUserScheme) {
  return ARFactory<T>({
    url: '/user',
    method: 'GET',
    params: { uid, email, username, keyword }
  })
}
