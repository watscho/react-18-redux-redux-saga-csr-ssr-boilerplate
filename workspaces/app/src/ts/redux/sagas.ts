import { all, fork, ForkEffect } from 'redux-saga/effects'

import { sagas } from '@/modules'

export const rootSaga = function* () {
  let forks: ForkEffect[] = []

  for (let i = 0; i < sagas.length; i++) {
    forks.push(
      fork(sagas[i])
    )
  }

  yield all(forks)
}
