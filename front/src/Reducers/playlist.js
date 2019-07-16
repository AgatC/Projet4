import { GET_PLAYLIST_SUCCESS } from '../Action/types';

const initialState = [];

function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLIST_SUCCESS:
      return action.playlist;
    default:
      return state;
  }
}

export default playlistReducer;