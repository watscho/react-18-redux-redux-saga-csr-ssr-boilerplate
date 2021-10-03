import dotProp from 'dot-prop-immutable'

import {
  POSTS_FETCH_SUCCEEDED,
  POSTS_FETCH_FAILED,
  RESET_POSTS
} from '../actions/types'

import {
  postCreateSucceeded,
  postUpdateSucceeded,
  postDeleteSucceeded,
  postUpdateRequested,
  postDeleteRequested
} from '../actions'

const initialState: any = {
  byId: {},
  allIds: [],
  errors: undefined,
  loading: true
}

export default function posts(state = initialState, action: any) {
  switch (action.type) {
    case POSTS_FETCH_SUCCEEDED:
      return { ...state, ...action.payload, loading: false }

    case POSTS_FETCH_FAILED:
      return { ...state, ...action.payload, loading: false }

    case postCreateSucceeded(0).type:
      return {
        ...state,
        byId: {
          ...action.payload.byId,
          ...state.byId
        },
        allIds: [action.payload.allIds, ...state.allIds]
      }

    case postUpdateRequested(0).type:
      return dotProp.set(state, `byId.${action.payload.id}`, {
        ...state.byId[action.payload.id],
        loading: true
      })

    case postUpdateSucceeded(0).type:
      return dotProp.set(state, `byId.${action.payload.allIds}`, {
        ...action.payload.byId[action.payload.allIds],
        loading: false
      })

    case postDeleteRequested(0).type:
      return dotProp.set(state, `byId.${action.payload.id}`, {
        ...state.byId[action.payload.id],
        loading: true
      })

    case postDeleteSucceeded(0).type:
      return dotProp.delete(state, [
        'allIds',
        state.allIds.findIndex((id: any) => id === action.payload.id)
      ])

    case RESET_POSTS:
      return {
        ...state,
        ...initialState
      }

    default:
      return state
  }
}
