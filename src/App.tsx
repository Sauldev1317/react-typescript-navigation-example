import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Toolbar } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SideNavigationBar from './components/SideNvigationBar/SideNavigationBar';
import Home from './pages/Home';
import User from './pages/User';
import AppNavigationBar from './components/AppNavigationBar/AppNavigationBar';

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
          <CssBaseline />
          <AppNavigationBar />
          <SideNavigationBar />
          <main className={classes.content}>
            <Toolbar />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home" component={Home} />
                <Route exact path="/User" component={User} />
            </Switch>
          </main>
      </div>
    </Router>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);


export default App;
