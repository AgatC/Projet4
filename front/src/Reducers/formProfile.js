import { GET_PROFILE_SUCCESS, CHANGE_PROFILE } from '../Action/types';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROFILE:
      return {
        ...state,
        [action.name]: action.value
      }
    case GET_PROFILE_SUCCESS:
      return action.profile;
    default:
      return state
  }
}

export default reducer;