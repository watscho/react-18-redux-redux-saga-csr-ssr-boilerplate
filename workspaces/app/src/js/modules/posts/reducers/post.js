import {
  POST_FETCH_SUCCEEDED,
  POST_FETCH_FAILED,
  RESET_POST
} from '../actions/types'

const initialState = {
  data: undefined,
  errors: undefined,
  loading: true
}

export default function post(state = initialState, action) {
  const actionTypes = {
    [POST_FETCH_SUCCEEDED]: {
      ...state,
      ...action.payload,
      loading: false
    },
    [POST_FETCH_FAILED]: {
      ...state,
      ...action.payload,
      loading: false
    },
    [RESET_POST]: {
      ...state,
      ...initialState
    },
    default: state
  }

  return Reflect.has(actionTypes, action.type)
    ? actionTypes[action.type]
    : actionTypes.default
}
