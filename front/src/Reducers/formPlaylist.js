import { CHANGE_VALUE_PLAYLIST } from '../Action/types'

const initialState = {
  title: '',
  genre: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE_PLAYLIST:
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}

export default reducer;