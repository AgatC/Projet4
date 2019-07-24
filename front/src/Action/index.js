import { GET_PLAYLIST_SUCCESS, EDIT_TRACK_SUCCESS } from './types';
import { GET_TRACKS_SUCCESS } from './types';
import { GET_ONE_TRACK_SUCCESS } from './types';
import { CHANGE_VALUE } from './types';
import { CREATE_TRACK_SUCCESS } from './types';
import { DELETE_TRACK_SUCCESS } from './types';
import { DELETE_PLAYLIST_SUCCESS } from './types';
import { CREATE_PLAYLIST_SUCCESS } from './types';
import { CHANGE_VALUE_PLAYLIST } from './types';
import { GET_PROFILE_SUCCESS } from './types';
import { EDIT_PROFILE_SUCCESS } from './types';
import { CHANGE_PROFILE } from './types';

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

export function getOneTrackSuccess(oneTrack) {
  return {
    type: GET_ONE_TRACK_SUCCESS,
    oneTrack
  }
}

export function changeValue(name, value) {
  return {
    type: CHANGE_VALUE,
    name,
    value
  }
}

export function changeValuePlaylist(name, value) {
  return {
    type: CHANGE_VALUE_PLAYLIST,
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

export function deletePlaylistSuccess(id) {
  return {
    type: DELETE_PLAYLIST_SUCCESS,
    id: id
  }
}

export function createPlaylistSuccess(newPlaylist) {
  return {
    type: CREATE_PLAYLIST_SUCCESS,
    newPlaylist
  }
}

export function getProfileSuccess(profile) {
  return {
    type: GET_PROFILE_SUCCESS,
    profile
  }
}

export function editProfileSuccess(profile, editProfile) {
  return {
    type: EDIT_PROFILE_SUCCESS,
    profile: profile,
    editProfile: editProfile
  }
}

export function changeProfile(name, value) {
  return {
    type: CHANGE_PROFILE,
    name,
    value
  }
}