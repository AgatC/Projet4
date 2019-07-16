import { GET_PLAYLIST_SUCCESS } from './types';
import { GET_TRACKS_SUCCESS } from './types';

export function getPlaylistSuccess(playlist) {
  return {
    type: GET_PLAYLIST_SUCCESS,
    playlist
  }
}

export function getTracksSuccess(tracks) {
  return {
    type: GET_TRACKS_SUCCESS,
    tracks
  }
}