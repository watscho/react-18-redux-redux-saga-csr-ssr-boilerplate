import {
  SET_COOKIES,
  SET_VISIBILITY,
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

export const setCookies = (content: any) => ({
  type: SET_COOKIES,
  payload: content
})

export const setVisibility = (content: any) => ({
  type: SET_VISIBILITY,
  payload: content
})

export const authFetchRequested = () => ({
  type: AUTH_FETCH_REQUESTED
})
export const authFetchSucceeded = (content: any) => ({
  type: AUTH_FETCH_SUCCEEDED,
  payload: content
})
export const authFetchFailed = (content: any) => ({
  type: AUTH_FETCH_FAILED,
  payload: content
})

export const authLogoutRequested = () => ({
  type: AUTH_LOGOUT_REQUESTED
})
export const authLogoutSucceeded = (content: any) => ({
  type: AUTH_LOGOUT_SUCCEEDED,
  payload: content
})
export const authLogoutFailed = (content: any) => ({
  type: AUTH_LOGOUT_FAILED,
  payload: content
})

export const appDataFetchRequested = (content: any) => ({
  type: APP_DATA_FETCH_REQUESTED,
  payload: content
})
export const appDataFetchSucceeded = (content: any) => ({
  type: APP_DATA_FETCH_SUCCEEDED,
  payload: content
})
export const appDataFetchFailed = (content: any) => ({
  type: APP_DATA_FETCH_FAILED,
  payload: content
})

export const socketRequested = (content: any) => ({
  type: SOCKET_REQUESTED,
  payload: content
})
export const socketSucceeded = (content: any) => ({
  type: SOCKET_SUCCEEDED,
  payload: content
})
