import trackReducer from '../../Reducers/track';
import { GET_TRACKS_SUCCESS, CREATE_TRACK_SUCCESS, DELETE_TRACK_SUCCESS, EDIT_TRACK_SUCCESS } from '../../Action/types';

describe('test track reducer', () => {
  it('get track success action', () => {
    const tracks = [{ "id": 15, "playlist_id": 7, "title": "Sur le sol", "artist": "Lomepal", "album_picture": "https://i2.wp.com/penseesparisiennes.com/wp-content/uploads/2017/07/18527945_1385317294845515_1242079931857358181_n.jpg?fit=820%2C820", "youtube_url": "https://www.youtube.com/watch?v=PB49R4qPawU" }, { "id": 16, "playlist_id": 7, "title": "Malade", "artist": "Roméo Elvis", "album_picture": "https://images.genius.com/43b2dc51006dbb15df385a1b69b11cec.1000x1000x1.jpg", "youtube_url": "https://www.youtube.com/watch?v=_piXExiUd80" }]
    const action = {
      type: GET_TRACKS_SUCCESS,
      tracks
    }
    const state = trackReducer([], action)
    expect(state).toEqual(tracks)
  })
  it('create track success', () => {
    const newTrack = { "title": "Malade", "artist": "Roméo Elvis", "album_picture": "https://images.genius.com/43b2dc51006dbb15df385a1b69b11cec.1000x1000x1.jpg", "youtube_url": "https://www.youtube.com/watch?v=_piXExiUd80" }
    const action = {
      type: CREATE_TRACK_SUCCESS,
      newTrack
    }
    const state = trackReducer([], action)
    expect(state).toEqual([newTrack])
  });
})


