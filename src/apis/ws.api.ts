import { coreState } from '../states'

type WsResponse = {
  code: number
  data: any
  succeed: boolean
}

export async function addFriendSocket(friendId: number): Promise<WsResponse> {
  const { socket } = coreState.socket.states

  return new Promise((resolve) => {
    socket.emit('addFriend', { friendId }, (data: any) => {
      resolve(data)
    })
  })
}
