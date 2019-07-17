import { GET_TRACKS_SUCCESS, CREATE_TRACK_SUCCESS } from '../Action/types';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS_SUCCESS:
      return action.tracks;
    case CREATE_TRACK_SUCCESS:
      return [...state, action.newTrack];
    default:
      return state;
  }
}

export default reducer;
