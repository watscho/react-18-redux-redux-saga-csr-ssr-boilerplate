import { call, put, take, fork, select } from 'redux-saga/effects'

import {
  appDataFetchSucceeded,
  appDataFetchFailed,
  appDataFetchRequested
} from '../actions'
import { appDataService } from '@/services'

function* fetchAppData() {
  try {
    const appData: { [key: string]: any } = yield select(({ appData}) => appData)

    if (!appData.loading) return

    const response: { [key: string]: any } = yield call(appDataService.fetchAppData)

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
    const { payload } = yield take(appDataFetchRequested(0).type)

    yield fork(fetchAppData)

    if (typeof payload?.promise?.resolve !== 'undefined') {
      yield call(payload.promise.resolve)
    }
  }
}
