import type { User } from '@type/user.type'

/** 信息类型 */
export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  FILE = 'FILE'
}

/** 发送者类型 */
export enum SenderType {
  USER = 'USER',
  SYSTEM = 'SYSTEM'
}

/** 本地信息发送状态 */
export enum MessageStatus {
  SENDING = 'SENDING',
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS'
}

/** Room信息类型 */
export type RoomMessage<T extends MessageType> = {
  rmid: number
  rid: number
  uid: number
  type: T
  content: any
  createdAt: number
}

export interface RoomTextMessageItem {
  message: RoomMessage<MessageType.TEXT>
  user: Pick<User, 'uid' | 'role' | 'avatar' | 'username' | 'status'>
  status: MessageStatus
}
