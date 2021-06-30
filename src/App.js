import React from 'react';
import { Switch, route } from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';
function App() {
  return (
    <Switch>
      <route exact path="/Home">
        <Home />
      </route>
      <route exact path="/starred">
        <Starred />
      </route>
      <route>
        <div> 404 not found !!</div>
      </route>
    </Switch>
  );
}

export default App;
