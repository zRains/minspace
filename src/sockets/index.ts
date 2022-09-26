import { io } from 'socket.io-client'

const socket = io('ws://127.0.0.1:3000', {
  reconnectionDelayMax: 10000,
  auth: {
    token: '123'
  }
})

export default socket
