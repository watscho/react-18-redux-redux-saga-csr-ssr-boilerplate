import { SET_COOKIES } from '../actions/types'

const initialState = {}

export default function cookies(state = initialState, action) {
  const actionTypes = {
    [SET_COOKIES]: {
      ...state,
      ...action.payload
    },
    default: state
  }

  return Reflect.has(actionTypes, action.type)
    ? actionTypes[action.type]
    : actionTypes.default
}
