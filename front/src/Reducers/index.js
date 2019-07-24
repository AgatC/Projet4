import { combineReducers } from 'redux';
import playlistReducer from './playlist';
import authReducer from './auth';
import tracksReducer from './track';
import formReducer from './form';
import formPlaylistReducer from './formPlaylist';
import profileReducer from './profile';


export default combineReducers({
  playlist: playlistReducer,
  auth: authReducer,
  tracks: tracksReducer,
  form: formReducer,
  formPlaylist: formPlaylistReducer,
  profile: profileReducer,
});
