import { CHANGE_VALUE } from '../Action/types'

const initialState = {
  playlist_id: '',
  title: '',
  artist: '',
  album_picture: '',
  youtube_url: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}

export default reducer;