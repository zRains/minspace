import { SOCKET_URL } from '../../minspace.config'
import { MessageType, RoomMessageDto } from '../../types/message.type'
import storage from '../../utils/storage'

let socket: WebSocket

function authSocket(s: WebSocket) {}

/** Socket 事件绑定 */
function bindSocket(s: WebSocket) {
  s.addEventListener('sendRoomMessage-succeed', function (data) {
    console.log(data)
  })
}

function sendJson<T = any>(payload: { event: string; data?: T; [k: string]: any }) {
  socket.send(JSON.stringify(Object.assign(payload, { uid: storage.get('user').uid })))
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
    states: {},
    mutations: { seedRoomMessage },
    actions: { initSocket }
  }
}
