import { ARFactory } from '.'

interface LoginDto {
  email: string
  password: string
}

export function login({ email, password }: LoginDto) {
  return ARFactory({
    url: '/auth/login',
    method: 'POST',
    data: { email, password }
  })
}

export interface RegisterDto extends LoginDto {
  passwordConfirm: string
}

export function register({ email, password, passwordConfirm }: RegisterDto) {
  return ARFactory({
    url: '/auth/register',
    method: 'POST',
    data: { email, password, passwordConfirm }
  })
}
