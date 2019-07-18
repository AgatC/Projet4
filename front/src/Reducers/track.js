import { GET_TRACKS_SUCCESS, CREATE_TRACK_SUCCESS, DELETE_TRACK_SUCCESS, EDIT_TRACK_SUCCESS } from '../Action/types';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS_SUCCESS:
      return action.tracks;
    case CREATE_TRACK_SUCCESS:
      return [...state, action.newTrack];
    case DELETE_TRACK_SUCCESS:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_TRACK_SUCCESS:
      return [...state, action.editTrack]
    default:
      return state;
  }
}

export default reducer;
