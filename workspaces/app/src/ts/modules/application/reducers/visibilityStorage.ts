import { SET_VISIBILITY } from '../actions/types'

const initialState: any = {}

export default function visibilityStorage(state = initialState, action: any) {
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
