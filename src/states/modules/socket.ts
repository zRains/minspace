import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'
import storage from '../../utils/storage'

let socket: Socket

export default function useSocketStates() {
  // states

  // mutations
  const connectSocket = (callback?: (s: Socket) => {}) => {
    socket = io('ws://127.0.0.1:3000', {
      reconnectionDelayMax: 1000,
      auth: {
        uid: storage.get('user').uid,
        token: storage.get('user').token
      }
    })

    socket.on('connect', () => {
      if (callback) callback(socket)
    })
  }

  const disconnectSocket = () => {
    if (socket) socket.disconnect()
  }

  // actions

  return {
    states: {
      get socket() {
        return socket
      }
    },
    mutations: { connectSocket, disconnectSocket },
    actions: {}
  }
}
