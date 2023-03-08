import type { User } from './user.type'

/** 信息类型 */
// eslint-disable-next-line no-shadow
export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  FILE = 'FILE'
}

/** 发送者类型 */
// eslint-disable-next-line no-shadow
export enum SenderType {
  USER = 'USER',
  SYSTEM = 'SYSTEM'
}

/** Room信息类型 */
export type RoomMessageDto = {
  rid: number
  uid: number
  type: MessageType
  content: any
  createdAt: number
}

export type RoomTextMessageItem = {
  message: RoomMessageDto
  user: Pick<User, 'uid' | 'role' | 'avatar' | 'username' | 'status'>
}
