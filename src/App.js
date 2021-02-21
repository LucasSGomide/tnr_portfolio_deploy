import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Home,
  Contact,
} from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contato" component={ Contact } />
        <Route path="/" component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
