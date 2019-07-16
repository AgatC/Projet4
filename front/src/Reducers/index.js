import { combineReducers } from 'redux';
import playlistReducer from './playlist';
import authReducer from './auth';
import tracksReducer from './track';


export default combineReducers({
  playlist: playlistReducer,
  auth: authReducer,
  tracks: tracksReducer,
});
