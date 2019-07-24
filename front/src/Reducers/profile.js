import { GET_PROFILE_SUCCESS, EDIT_PROFILE_SUCCESS, CHANGE_PROFILE } from '../Action/types';

const initialState = []


function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return action.profile;
    case CHANGE_PROFILE:
      return {
        ...state,
        [action.name]: action.value
      }
    case EDIT_PROFILE_SUCCESS:
      return { ...state },
        [action.editProfile]
    default:
      return state;
  }
}

export default reducer;
