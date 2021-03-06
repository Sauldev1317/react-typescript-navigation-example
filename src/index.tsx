import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import Theme from './resourses/Theme';

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

