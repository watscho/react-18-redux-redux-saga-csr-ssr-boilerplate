import {
  POSTS_FETCH_SUCCEEDED,
  POSTS_FETCH_FAILED,
  RESET_POSTS
} from '../actions/types'

import { postDeleteRequested, postUpdateRequested } from '../actions'

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
    [postUpdateRequested().type]: {
      ...state,
      data: state.data.map(({ id, title, body }) => {
        let data = { id, title, body }
        if (id === action.payload?.id) {
          data.title = action.payload?.data?.title
          data.body = action.payload?.data?.body
        }
        return data
      })
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
