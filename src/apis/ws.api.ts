import { coreState } from '../states'

export async function addFriendSocket(userId: number, friendId: number) {
  const { socket } = coreState.socket.states

  return new Promise((resolve) => {
    socket.emit('addFriend', { userId, friendId }, (data: any) => {
      resolve(data)
    })
  })
}
