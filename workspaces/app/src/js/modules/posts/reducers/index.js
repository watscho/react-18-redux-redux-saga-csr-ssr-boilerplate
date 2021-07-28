import {
  POSTS_FETCH_SUCCEEDED,
  POSTS_FETCH_FAILED,
  RESET_POSTS
} from '../actions/types'

import { postDeleteRequested } from '../actions'

const initialState = {
  data: [],
  errors: undefined,
  loading: true
}

export default function posts(state = initialState, action) {
  const actionTypes = {
    [POSTS_FETCH_SUCCEEDED]: {
      ...state,
      ...action.payload,
      loading: false
    },
    [POSTS_FETCH_FAILED]: {
      ...state,
      ...action.payload,
      loading: false
    },
    [postDeleteRequested().type]: {
      ...state,
      data: state.data.filter(({ id }) => id !== action.payload?.id)
    },
    [RESET_POSTS]: {
      ...state,
      ...initialState
    },
    default: state
  }

  return Reflect.has(actionTypes, action.type)
    ? actionTypes[action.type]
    : actionTypes.default
}
