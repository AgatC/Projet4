import { GET_TRACKS_SUCCESS } from '../Action/types';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS_SUCCESS:
      return action.tracks;
    default:
      return state;
  }
}

export default reducer;
