import { GET_PLAYLIST_SUCCESS } from '../Action/types';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLIST_SUCCESS:
      return action.playlist;
    default:
      return state;
  }
}

export default reducer; 