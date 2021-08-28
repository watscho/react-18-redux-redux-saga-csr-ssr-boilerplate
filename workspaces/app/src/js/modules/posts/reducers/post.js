import {
  POST_FETCH_SUCCEEDED,
  POST_FETCH_FAILED,
  RESET_POST
} from '../actions/types'

const initialState = {
  byId: {},
  allIds: null,
  errors: undefined,
  loading: true
}

export default function post(state = initialState, action) {
  switch (action.type) {
    case POST_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case POST_FETCH_FAILED:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case RESET_POST:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}
