import { GET_PROFILE_SUCCESS, EDIT_PROFILE_SUCCESS } from '../Action/types';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return action.profile;
    case EDIT_PROFILE_SUCCESS:
      return [...state, action.editProfile]
    default:
      return state;
  }
}

export default reducer;
