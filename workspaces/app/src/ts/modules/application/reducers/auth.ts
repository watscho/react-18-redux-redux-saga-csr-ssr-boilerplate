import {
  AUTH_FETCH_SUCCEEDED,
  AUTH_FETCH_FAILED,
  AUTH_LOGOUT_SUCCEEDED,
  AUTH_LOGOUT_FAILED
} from '../actions/types'

const initialState = {
  user: undefined,
  errors: undefined,
  loading: true
}

export default function auth(state = initialState, action: any) {
  switch (action.type) {
    case AUTH_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        loading: false
      }

    case AUTH_FETCH_FAILED:
      return {
        ...state,
        ...action.payload,
        errors: true,
        loading: false
      }

    case AUTH_LOGOUT_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        loading: false
      }

    case AUTH_LOGOUT_FAILED:
      return {
        ...state,
        ...action.payload,
        errors: true,
        loading: false
      }

    default:
      return state
  }
}
