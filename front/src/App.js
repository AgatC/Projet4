import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import Login from './Components/Login';
import { getPlaylistSuccess } from './Action/index';
import Home from './Components/Home';

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
    const { dispatch, token } = this.props;
    axios.get('/api/playlist/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.data)
      .then(playlist => dispatch(getPlaylistSuccess(playlist)));
  }

  setToken(token) {
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    const { playlist } = this.props;
    return (
      <div className="App">
        <header>
          {
            token
              ? <Home token={token} playlist={playlist} />
              : <Login setToken={this.setToken} />
          }
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => (
  { playlist: state }
);

export default connect(mapStateToProps)(App);
