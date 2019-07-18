import { GET_PLAYLIST_SUCCESS, EDIT_TRACK_SUCCESS } from './types';
import { GET_TRACKS_SUCCESS } from './types';
import { CHANGE_VALUE } from './types';
import { CREATE_TRACK_SUCCESS } from './types';
import { DELETE_TRACK_SUCCESS } from './types';

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

export function changeValue(name, value) {
  return {
    type: CHANGE_VALUE,
    name,
    value
  }
}

export function createTrackSuccess(newTrack) {
  return {
    type: CREATE_TRACK_SUCCESS,
    newTrack
  }
}

export function deleteTrackSuccess(id) {
  return {
    type: DELETE_TRACK_SUCCESS,
    id: id
  }
}

export function editTrackSuccess(track, editTrack) {
  return {
    type: EDIT_TRACK_SUCCESS,
    track: track,
    editTrack: editTrack
  }
}