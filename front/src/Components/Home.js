import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Header, Icon, Button, Container, Image
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
          <Header as='h2' icon textAlign='center'>
            <Icon name='music' circular />
            <Header.Content>My-Music</Header.Content>
          </Header>
          <Image centered size="large" src="https://cdn.pixabay.com/photo/2019/03/08/21/13/record-4043223_960_720.jpg" />
        </Container>
        <Container>
          <div>
            {playlist && playlist.map(onePlaylist => (
              <Link key={onePlaylist.id} to={`/track/playlist/${onePlaylist.id}`}>
                <Button>{onePlaylist.title}</Button>
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
