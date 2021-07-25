import { all, fork } from 'redux-saga/effects'

import { sagas } from 'modules'

export const rootSaga = function* () {
  const forks = []

  for (let i = 0; i < sagas.length; i++) {
    forks.push(fork(sagas[i]))
  }

  yield all(forks)
}
