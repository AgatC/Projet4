import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { getPlaylistSuccess } from '../Action/index';

class Navbar extends Component {
  componentDidMount() {
    this.getPlaylist()
  }

  getPlaylist() {
    const { dispatch } = this.props;
    axios.get('/api/playlist/')
      .then(res => res.data)
      .then(playlist => dispatch(getPlaylistSuccess(playlist)));
  }

  render() {
    const { playlist } = this.props;

    return (
      <Menu inverted color="black" fluid>
        <Link to="/"><Menu.Item name='home' icon='home' /></Link>
        <Dropdown item icon='music' name='Playlists' simple>
          <Dropdown.Menu>
            {playlist && playlist.map(onePlaylist => (
              <Dropdown.Item className="dropdownItem">
                <Link key={onePlaylist.id} to={`/track/playlist/${onePlaylist.id}`}>
                  {onePlaylist.title}
                </Link>
              </Dropdown.Item>

            ))
            }
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name='Profile' icon='user' />
      </Menu>
    )
  }
}


const mapStateToProps = state => (
  {
    playlist: state.playlist,
  }
);

export default connect(mapStateToProps)(Navbar);