import { all, fork } from 'redux-saga/effects'

import { sagas } from '@/modules'

export const rootSaga = function* () {
  const effects: any = sagas.map(
    (saga: any) => fork(saga)
  )

  yield all(effects)
}
