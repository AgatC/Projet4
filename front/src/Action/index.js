import { GET_PLAYLIST_SUCCESS } from './types';

export function getPlaylistSuccess(playlist) {
  return {
    type: GET_PLAYLIST_SUCCESS,
    playlist
  }
}