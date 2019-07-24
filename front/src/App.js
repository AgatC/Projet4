import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import OneCategory from './Components/OneCategory';
import PlaylistTracks from './Components/PlaylistTracks';
import Navbar from './Components/Navbar';
import AddTrack from './Components/AddTrack';
import EditTrack from './Components/EditTrack';
import OnePlaylist from './Components/OnePlaylist';
import EditProfile from './Components/EditProfile';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { user } = this.props;
    axios.get('/api/playlist/', {
      headers: {
        Authorization: `Bearer ${user}`
      }
    })
      .then(res => res.data);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return (
        <Login setToken={this.setToken} />
      )
    }
    return (
      <div className="App">
        <header>
          <Navbar user={user} />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/track/playlist/:id" component={OneCategory} />
          <Route path="/track/new" component={AddTrack} />
          <Route path="/track/edit-track/:id" component={EditTrack} />
          <Route path="/track/:id" component={PlaylistTracks} />
          <Route path="/playlist/edit" component={OnePlaylist} />
          <Route path="/user/:id" component={EditProfile} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps)(App);
