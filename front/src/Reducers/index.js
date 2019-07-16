import { combineReducers } from 'redux';
import playlistReducer from './playlist';
import authReducer from './auth';


export default combineReducers({
  playlist: playlistReducer,
  auth: authReducer,
});
