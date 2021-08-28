import { SET_COOKIES } from '../actions/types'

const initialState = {}

export default function cookies(state = initialState, action) {
  switch (action.type) {
    case SET_COOKIES:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}
