import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import './App.css';
import Home from './Components/Home';
import { getPlaylistSuccess } from './Action/index';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/playlist/')
      .then(res => res.data)
      .then(playlist =>
        dispatch(getPlaylistSuccess(playlist)
        ));
  }

  render() {
    const { playlist } = this.props;
    return (
      <div className="App">
        <header>
          {/* <Navbar /> */}

        </header>
        {/* <Switch> */}
        <Home playlist={playlist} />
        {/* </Switch> */}
      </div>
    );
  }
}

const mapStateToProps = state => (
  { playlist: state }
)

export default connect(mapStateToProps)(App);
