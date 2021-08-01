import { eventChannel, END } from 'redux-saga'
import { take, put, call, apply, takeEvery } from 'redux-saga/effects'

import { socketSucceeded, socketRequested } from '../actions'

const createSocketConnection = url =>
  typeof WebSocket !== 'undefined' && new WebSocket(url)

const createSocketChannel = socket =>
  eventChannel(emit => {
    socket.onConnect = () => {
      emit(socketSucceeded({ connected: true }))
    }

    socket.onDisconnect = () => {
      emit(END)
    }

    const unsubscribe = () => {
      emit(socketSucceeded({ connected: false }))
    }

    return unsubscribe
  })

function* socketHandler(socket, { payload }) {
  yield apply(socket, ...payload)
}

export default function* watcher() {
  const noSocket = true

  if (noSocket) return false

  const socket = yield call(createSocketConnection, process.env.WS_URL)

  if (!socket) return

  const socketChannel = yield call(createSocketChannel, socket)

  yield takeEvery(socketRequested().type, socketHandler, socket)

  while (true) {
    try {
      const socket = yield take(socketChannel)

      yield put(socket)
    } catch (err) {
      socketChannel.close()
    }
  }
}
