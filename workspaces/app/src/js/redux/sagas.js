import { all, fork } from 'redux-saga/effects'

import { sagas } from 'modules'

export const rootSaga = function* () {
  const effects = sagas.map(saga => fork(saga))

  yield all(effects)
}
