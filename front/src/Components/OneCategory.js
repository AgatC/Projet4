import React, { Component } from 'react';
import {
  Grid, Container, Header
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getTracksSuccess } from '../Action/index';
import OneTrack from './OneTrack';

class OneCategory extends Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    const { id } = match.params;
    axios.get(`/api/track/playlist/${id}`)
      .then(res => res.data)
      .then(tracks => dispatch(getTracksSuccess(tracks)));
  }

  render() {
    const { tracks, playlist } = this.props;

    return (
      <Container>
        <Header style={{ textAlign: 'center' }} size="huge">{playlist.title}</Header>
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
