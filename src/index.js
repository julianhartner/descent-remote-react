import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/Navigation/Navigation.js';
import Player from './components/Player/Player.js';
import Overlord from './components/Overlord/Overlord.js';
import PlayerSelection from './components/PlayerSelection/PlayerSelection.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function Routing() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/:username/hero">
            <Player />
          </Route>
          <Route path="/:username/overlord">
            <Overlord />
          </Route>
          <Route path="/">
            <PlayerSelection />
          </Route>
        </Switch>
      </div>
    );
}

ReactDOM.render(
  <Router>
    <Routing />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
