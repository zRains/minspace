import { coreState } from '../states'

export async function addFriendSocket(friendId: number) {
  const { socket } = coreState.socket.states

  return new Promise((resolve) => {
    socket.emit('addFriend', { friendId }, (data: any) => {
      resolve(data)
    })
  })
}
