import { call, put, take, fork, select } from 'redux-saga/effects'

import {
  authFetchSucceeded,
  authFetchFailed,
  authFetchRequested,
  authLogoutSucceeded,
  authLogoutFailed,
  authLogoutRequested
} from '../actions'
import { authService } from 'services'

function* fetchAuth({ payload }) {
  try {
    const { auth, cookies } = yield select(({ auth, cookies }) => ({
      auth,
      cookies
    }))

    if (auth.user) return

    const response = yield call(authService.fetchUser, {
      cookies
    })

    if (!response.ok) {
      throw new Error(response.data)
    }

    yield put(
      authFetchSucceeded({
        user: response.data,
        ...payload
      })
    )

    if (typeof payload?.redirectTo !== 'undefined') {
      yield call(payload.redirectTo)
    }
  } catch (errors) {
    yield put(authFetchFailed({ errors }))
  }
}

function* logoutAuth({ payload }) {
  try {
    const cookies = yield select(({ cookies }) => cookies)

    const response = yield call(authService.logoutAuth, { cookies })

    if (!response.ok) {
      throw new Error(response.data)
    }

    if (typeof payload?.removeToken !== 'undefined') {
      yield call(payload.removeToken)
    }

    yield put(authLogoutSucceeded())
  } catch (errors) {
    yield put(authLogoutFailed({ errors }))
  }
}

export default function* watcher() {
  const actions = {
    [authFetchRequested().type]: fetchAuth,
    [authLogoutRequested().type]: logoutAuth
  }

  while (true) {
    const { type, payload } = yield take([
      authFetchRequested().type,
      authLogoutRequested().type
    ])

    yield fork(actions[type], { payload })
  }
}
