import {
  APP_DATA_FETCH_SUCCEEDED,
  APP_DATA_FETCH_FAILED
} from '../actions/types'

const initialState = {
  data: undefined,
  errors: undefined,
  loading: true
}

export default function appData(state = initialState, action: any) {
  switch (action.type) {
    case APP_DATA_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        loading: false
      }

    case APP_DATA_FETCH_FAILED:
      return {
        ...state,
        ...action.payload,
        errors: true,
        loading: false
      }

    default:
      return state
  }
}
