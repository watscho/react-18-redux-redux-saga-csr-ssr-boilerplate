import {
  POST_CREATE_REQUESTED,
  POST_CREATE_SUCCEEDED,
  POST_CREATE_FAILED
} from '../actions/types'

const initialState = { loader: false }

export default function postCreate(state = initialState, action: any) {
  switch (action.type) {
    case POST_CREATE_REQUESTED:
      return {
        ...state,
        loader: true
      }
    case POST_CREATE_SUCCEEDED:
      return {
        ...state,
        loader: false
      }
    case POST_CREATE_FAILED:
      return {
        ...state,
        loader: false
      }

    default:
      return state
  }
}
