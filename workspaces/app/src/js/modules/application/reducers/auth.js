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

export default function auth(state = initialState, action) {
  const actionTypes = {
    [AUTH_FETCH_SUCCEEDED]: {
      ...state,
      ...action.payload,
      loading: false
    },
    [AUTH_FETCH_FAILED]: {
      ...state,
      ...action.payload,
      errors: true,
      loading: false
    },
    [AUTH_LOGOUT_SUCCEEDED]: {
      ...state,
      ...initialState,
      loading: false
    },
    [AUTH_LOGOUT_FAILED]: {
      ...state,
      ...action.payload,
      errors: true,
      loading: false
    },
    default: state
  }

  return Reflect.has(actionTypes, action.type)
    ? actionTypes[action.type]
    : actionTypes.default
}
