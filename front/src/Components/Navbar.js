import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { getPlaylistSuccess } from '../Action/index';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount() {
    this.getPlaylist()
  }

  getPlaylist() {
    const { dispatch } = this.props;
    axios.get('/api/playlist')
      .then(res => res.data)
      .then(playlist => dispatch(getPlaylistSuccess(playlist)));
  }

  logOut() {
    const { dispatch } = this.props;
    dispatch({
      type: 'LOGOUT'
    });
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
            <Dropdown.Item className="dropdownItem">
              <Link to="/playlist/edit">
                <Icon name="plus" />
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/user">
          <Menu.Item name='Profile' icon='user' />
        </Link>
        <Menu.Menu position="right">
          <Menu.Item
            icon="user"
            onClick={this.logOut}>Logout
          </Menu.Item>
        </Menu.Menu>
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