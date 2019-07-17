import { GET_PLAYLIST_SUCCESS } from './types';
import { GET_TRACKS_SUCCESS } from './types';
import { CHANGE_VALUE } from './types';
import { CREATE_TRACK_SUCCESS } from './types';

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

export function changeValue(playlist_id, title, artist, album_picture, youtube_url) {
  return {
    type: CHANGE_VALUE,
    playlist_id,
    title,
    artist,
    album_picture,
    youtube_url
  }
}

export function createTrackSuccess(newTrack) {
  return {
    type: CREATE_TRACK_SUCCESS,
    newTrack
  }
}