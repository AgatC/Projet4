import React, { Component } from 'react';
import {
  Grid, Container, Header
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getTracksSuccess } from '../Action/index';
import OneTrack from './OneTrack';
import Home from './Home';

class OneCategory extends Component {
  componentDidMount() {
    this.getTracks()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getTracks()
    }
  }

  getTracks() {
    const { match, dispatch } = this.props;
    const { id } = match.params;
    axios.get(`/api/track/playlist/${id}`)
      .then(res => res.data)
      .then(tracks => dispatch(getTracksSuccess(tracks)));
  }


  render() {
    const { tracks, playlist } = this.props;
    const { match } = this.props;
    const { id } = match.params;
    const onePlaylist = playlist.find(item => item.id === Number(id))
    if (!playlist || !onePlaylist) {
      return (
        <Home />
      )
    }
    return (
      <Container>
        <Header style={{ textAlign: 'center' }} size="huge">{onePlaylist.title}</Header>
        <Grid columns={6}>
          <OneTrack playlist={playlist} tracks={tracks} />
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => (
  {
    playlist: state.playlist,
    tracks: state.tracks,
  }
);

export default connect(mapStateToProps)(OneCategory);
