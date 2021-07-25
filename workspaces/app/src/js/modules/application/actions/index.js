import {
  SET_COOKIES,
  AUTH_FETCH_REQUESTED,
  AUTH_FETCH_SUCCEEDED,
  AUTH_FETCH_FAILED,
  AUTH_LOGOUT_REQUESTED,
  AUTH_LOGOUT_SUCCEEDED,
  AUTH_LOGOUT_FAILED,
  APP_DATA_FETCH_REQUESTED,
  APP_DATA_FETCH_SUCCEEDED,
  APP_DATA_FETCH_FAILED,
  SOCKET_REQUESTED,
  SOCKET_SUCCEEDED
} from './types'

export const setCookies = content => ({
  type: SET_COOKIES,
  payload: content
})

export const authFetchRequested = () => ({
  type: AUTH_FETCH_REQUESTED
})
export const authFetchSucceeded = content => ({
  type: AUTH_FETCH_SUCCEEDED,
  payload: content
})
export const authFetchFailed = content => ({
  type: AUTH_FETCH_FAILED,
  payload: content
})

export const authLogoutRequested = () => ({
  type: AUTH_LOGOUT_REQUESTED
})
export const authLogoutSucceeded = content => ({
  type: AUTH_LOGOUT_SUCCEEDED,
  payload: content
})
export const authLogoutFailed = content => ({
  type: AUTH_LOGOUT_FAILED,
  payload: content
})

export const appDataFetchRequested = content => ({
  type: APP_DATA_FETCH_REQUESTED,
  payload: content
})
export const appDataFetchSucceeded = content => ({
  type: APP_DATA_FETCH_SUCCEEDED,
  payload: content
})
export const appDataFetchFailed = content => ({
  type: APP_DATA_FETCH_FAILED,
  payload: content
})

export const socketRequested = content => ({
  type: SOCKET_REQUESTED,
  payload: content
})
export const socketSucceeded = content => ({
  type: SOCKET_SUCCEEDED,
  payload: content
})
