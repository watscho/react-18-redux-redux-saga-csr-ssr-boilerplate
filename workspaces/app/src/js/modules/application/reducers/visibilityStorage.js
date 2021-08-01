import { SET_VISIBILITY } from '../actions/types'

const initialState = {}

export default function visibilityStorage(state = initialState, action) {
  const actionTypes = {
    [SET_VISIBILITY]: {
      ...state,
      [action.payload?.name]: {
        visible:
          action.payload?.visible ?? !state[action.payload?.name]?.visible
      }
    },
    default: state
  }

  return Reflect.has(actionTypes, action.type)
    ? actionTypes[action.type]
    : actionTypes.default
}
