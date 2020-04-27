import React, { useEffect } from 'react';
import clsx from 'clsx';
import {
  Switch,
  BrowserRouter,
  Route as DefaultRoute,
  Redirect,
  Router,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { User } from '../User';
import { Lead } from '../Lead';
import { Category } from '../Category';
import { Company } from '../Company';
import { Event } from '../Event';
import { Group } from '../Group';
import { People } from '../People';
import { Product } from '../Product';
import { Service } from '../Service';
import { Team } from '../Team';

import AppMenu from './AppMenu';
const DefaultLayout = ({ children }) => {
  const classes = useStyles();
  const alert = useSelector((state) => state.alert);

  return (
    <div className={clsx('App', classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <AppMenu />
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          {children}
        </Container>
      </main>
    </div>
  );
};

const HomePageLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </header>
    </div>
  );
};

const Route = ({
  component: Component,
  layout: Layout = DefaultLayout,
  ...rest
}) => {
  return (
    <DefaultRoute
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} layout={HomePageLayout} />
          <Route
            path="/register"
            component={RegisterPage}
            layout={HomePageLayout}
          />
          <PrivateRoute exact path="/category" component={Category} />
          <PrivateRoute exact path="/company" component={Company} />
          <PrivateRoute exact path="/event" component={Event} />
          <PrivateRoute exact path="/group" component={Group} />
          <PrivateRoute exact path="/product" component={Product} />
          <PrivateRoute exact path="/service" component={Service} />
          <PrivateRoute exact path="/team" component={Team} />
          <PrivateRoute exact path="/people" component={People} />
          <PrivateRoute exact path="/lead" component={Lead} />
          <PrivateRoute exact path="/user" component={User} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export { App };
