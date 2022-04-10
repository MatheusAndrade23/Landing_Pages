import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="*" element={<Home />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
