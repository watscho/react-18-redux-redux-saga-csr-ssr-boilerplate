import {
  APP_DATA_FETCH_SUCCEEDED,
  APP_DATA_FETCH_FAILED
} from '../actions/types'

const initialState = {
  data: undefined,
  errors: undefined,
  loading: true
}

export default function appData(state = initialState, action) {
  const actionTypes = {
    [APP_DATA_FETCH_SUCCEEDED]: {
      ...state,
      ...action.payload,
      loading: false
    },
    [APP_DATA_FETCH_FAILED]: {
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
