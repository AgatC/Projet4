import { CHANGE_VALUE, GET_ONE_TRACK_SUCCESS } from '../Action/types'

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
    case GET_ONE_TRACK_SUCCESS:
      return action.oneTrack;
    default:
      return state
  }
}

export default reducer;