import { combineReducers } from 'redux';
import playlistReducer from './playlist';
import authReducer from './auth';
import tracksReducer from './track';
import formReducer from './form';


export default combineReducers({
  playlist: playlistReducer,
  auth: authReducer,
  tracks: tracksReducer,
  form: formReducer,
});
