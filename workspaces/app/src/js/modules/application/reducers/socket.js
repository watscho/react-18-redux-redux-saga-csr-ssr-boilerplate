import { SOCKET_SUCCEEDED } from '../actions/types'

const initialState = {
  connected: false
}

export default function socket(state = initialState, action) {
  const actionTypes = {
    [SOCKET_SUCCEEDED]: {
      ...state,
      ...action.payload
    },
    default: state
  }

  return Reflect.has(actionTypes, action.type)
    ? actionTypes[action.type]
    : actionTypes.default
}
