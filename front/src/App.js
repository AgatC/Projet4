import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import OneCategory from './Components/OneCategory';
import OneTrack from './Components/OneTrack';

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
    return (
      <div className="App">
        <header>
          {
            token
              ? <Home token={token} />
              : <Login setToken={this.setToken} />
          }
        </header>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/track/playlist/:id" component={OneCategory} />
          <Route path="/track/:id" component={OneTrack} />
        </Switch>
      </div>
    );
  }
}


export default App;
