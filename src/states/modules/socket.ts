import { SOCKET_URL } from '../../minspace.config'
import { MessageType, RoomMessageDto } from '../../types/message.type'
import storage from '../../utils/storage'

type ClientSocketPayload<T> = {
  event: string
  data?: T extends Record<string, any> ? T & { uid?: number } : never
}

let socket: WebSocket

/** Socket 事件绑定 */
function bindSocket(s: WebSocket) {
  s.addEventListener('sendRoomMessage-succeed', function (data) {
    console.log(data)
  })
}

function sendJson<T = any>(payload: ClientSocketPayload<T>) {
  payload.data && (payload.data.uid = storage.get('user').uid)

  socket.send(JSON.stringify(payload))
}

export default function useSocket() {
  // states

  // mutations
  function seedRoomMessage(rid: number, content: string, type: MessageType) {
    sendJson<RoomMessageDto>({
      event: 'sendRoomMessage',
      data: {
        rid,
        uid: storage.get('user').uid,
        type: MessageType.TEXT,
        content,
        createdAt: Date.now()
      }
    })
  }

  // actions
  function initSocket() {
    socket = new WebSocket(SOCKET_URL)

    function initSocketHandle() {
      bindSocket(socket)

      sendJson({
        event: 'init',
        data: {
          token: storage.get('user').token
        }
      })
      socket.removeEventListener('open', initSocketHandle)
    }

    socket.addEventListener('open', initSocketHandle)
  }

  return {
    states: {
      get socket() {
        return socket
      }
    },
    mutations: { seedRoomMessage },
    actions: { initSocket }
  }
}
