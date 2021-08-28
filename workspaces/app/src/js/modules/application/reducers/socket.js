import { SOCKET_SUCCEEDED } from '../actions/types'

const initialState = {
  connected: false
}

export default function socket(state = initialState, action) {
  switch (action.type) {
    case SOCKET_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}
