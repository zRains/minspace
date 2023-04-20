// Types
import { RoomTextMessageItem } from './message.type'

/** 基础Room类型 */
export type BasicRoom = {
  rid: number
  roomname: string
  desc: string
  cover: string
  status: number
  createdAt: Date
  editAt: Date
}

// export interface SpaceRoomRecord extends BasicRoom {
//   records:
// }
