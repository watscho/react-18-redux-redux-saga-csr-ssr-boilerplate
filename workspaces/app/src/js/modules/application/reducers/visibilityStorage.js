import { SET_VISIBILITY } from '../actions/types'

const initialState = {}

export default function visibilityStorage(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return {
        ...state,
        [action.payload?.name]: {
          visible:
            action.payload?.visible ?? !state[action.payload?.name]?.visible
        }
      }

    default:
      return state
  }
}
