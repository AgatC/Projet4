import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from 'semantic-ui-react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import OneCategory from './Components/OneCategory';
import OneTrack from './Components/OneTrack';
import Favorite from './Components/Favorite';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <Navbar />
        </div>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:id" component={OneCategory} />
        <Route path="/track/:id" component={OneTrack} />
        <Route path="/myfavorites" component={Favorite} />
      </Switch>
    </div>
  );
}

export default App;
