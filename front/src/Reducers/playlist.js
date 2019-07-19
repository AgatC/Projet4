import { GET_PLAYLIST_SUCCESS, CREATE_PLAYLIST_SUCCESS, DELETE_PLAYLIST_SUCCESS } from '../Action/types';

const initialState = [];

function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLIST_SUCCESS:
      return action.playlist;
    case CREATE_PLAYLIST_SUCCESS:
      return [...state, action.newPlaylist];
    case DELETE_PLAYLIST_SUCCESS:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
}

export default playlistReducer;