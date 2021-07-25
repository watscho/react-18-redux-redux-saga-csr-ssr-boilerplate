import {
  ARTICLES_FETCH_SUCCEEDED,
  ARTICLES_FETCH_FAILED,
  RESET_ARTICLES
} from '../actions/types'

const initialState = {
  data: [],
  errors: undefined,
  loading: true
}

export default function articles(state = initialState, action) {
  const actionTypes = {
    [ARTICLES_FETCH_SUCCEEDED]: {
      ...state,
      ...action.payload,
      loading: false
    },
    [ARTICLES_FETCH_FAILED]: {
      ...state,
      ...action.payload,
      loading: false
    },
    [RESET_ARTICLES]: {
      ...state,
      ...initialState
    },
    default: state
  }

  return Reflect.has(actionTypes, action.type)
    ? actionTypes[action.type]
    : actionTypes.default
}
