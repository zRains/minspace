import { ARFactory } from '.'

interface LoginRequired {
  email: string
  password: string
}

export interface RegisterRequired extends LoginRequired {
  passwordConfirm: string
}

export function login({ email, password }: LoginRequired) {
  return ARFactory({
    url: '/auth/login',
    method: 'POST',
    data: { email, password }
  })
}

export function register({ email, password, passwordConfirm }: RegisterRequired) {
  return ARFactory({
    url: '/auth/register',
    method: 'POST',
    data: { email, password, passwordConfirm }
  })
}
