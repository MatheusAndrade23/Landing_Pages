import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="*" element={<Home />} />
        </Switch>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
