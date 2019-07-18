import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Header, Icon, Button, Container
} from 'semantic-ui-react';
import { getPlaylistSuccess } from '../Action/index';


class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/playlist/')
      .then(res => res.data)
      .then(playlist => dispatch(getPlaylistSuccess(playlist)));
  }

  render() {
    const { playlist } = this.props;
    return (
      <div>
        <Container>
          <Header as='h1' icon textAlign='center'>
            <Icon name='music' />
            <Header.Content>My Music</Header.Content>
          </Header>
        </Container>
        <Container>
          <div>
            {playlist && playlist.map(onePlaylist => (
              <Link key={onePlaylist.id} to={`/track/playlist/${onePlaylist.id}`}>
                <Button className="homeButton">{onePlaylist.title}</Button>
              </Link>
            ))
            }
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => (
  { playlist: state.playlist }
);

export default connect(mapStateToProps)(Home);
