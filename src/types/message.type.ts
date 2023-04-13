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
export enum MessageSendingStatus {
  SENDING = 'SENDING',
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS'
}

/** Room信息类型 */
export type RoomMessageDto = {
  rmid: number
  rid: number
  uid: number
  type: MessageType
  content: any
  createdAt: number
}

export interface RoomTextMessageItem {
  message: RoomMessageDto
  user: Pick<User, 'uid' | 'role' | 'avatar' | 'username' | 'status'>
  status: MessageSendingStatus
}
