// eslint-disable-next-line no-shadow
export enum RoleType {
  USER = 'USER',
  OPERATOR = 'OPERATOR',
  ADMIN = 'ADMIN'
}

/** 用户基本架构模型 */
export type User = {
  uid: number
  role: RoleType
  sign: string
  email: string
  avatar: string
  username: string
  createdAt: Date
  editAt: Date
  status: number
}

/** 用户模糊查询数据结构 */
export type findUserDto = Partial<Pick<User, 'uid' | 'email' | 'username'> & { keyword: string }>

/** 用户详情数据结构 */
export type findUserResultDto = Pick<User, 'uid' | 'email' | 'username' | 'avatar' | 'sign'>
