import { call, put, take, fork, select } from 'redux-saga/effects'

import {
  appDataFetchSucceeded,
  appDataFetchFailed,
  appDataFetchRequested
} from '../actions'
import { appDataService } from 'services'

function* fetchAppData() {
  try {
    const { appData, cookies } = yield select(({ appData, cookies }) => ({
      appData,
      cookies
    }))

    if (!appData.loading) return

    const response = yield call(appDataService.fetchAppData, {
      cookies
    })

    if (!response.ok) {
      throw new Error(response.data)
    }

    yield put(appDataFetchSucceeded({ data: response.data }))
  } catch (errors) {
    yield put(appDataFetchFailed({ errors }))
  }
}

export default function* watcher() {
  while (true) {
    const { payload } = yield take(appDataFetchRequested().type)

    yield fork(fetchAppData, { payload })

    if (typeof payload?.promise?.resolve !== 'undefined') {
      yield call(payload.promise.resolve)
    }
  }
}
