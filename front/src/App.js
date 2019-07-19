import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import OneCategory from './Components/OneCategory';
import PlaylistTracks from './Components/PlaylistTracks';
import Navbar from './Components/Navbar';
import AddTrack from './Components/AddTrack';
import EditTrack from './Components/EditTrack';
import OnePlaylist from './Components/OnePlaylist';

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token') || '';
    this.state = {
      token
    };
    this.setToken = this.setToken.bind(this);
  }

  componentDidMount() {
    const { token } = this.props;
    axios.get('/api/playlist/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.data);
  }

  setToken(token) {
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    if (!token) {
      return (
        <Login setToken={this.setToken} />
      )
    }
    return (
      <div className="App">
        <header>
          <Navbar token={token} />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/track/playlist/:id" component={OneCategory} />
          <Route path="/track/new" component={AddTrack} />
          <Route path="/track/edit-track/:id" component={EditTrack} />
          <Route path="/track/:id" component={PlaylistTracks} />
          <Route path="/playlist/edit" component={OnePlaylist} />
        </Switch>
      </div>
    );
  }
}


export default App;
