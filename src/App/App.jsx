import React, { useEffect } from 'react';
import {
  Switch,
  BrowserRouter,
  Route as DefaultRoute,
  Redirect,
  Router,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { DefaultLayout, PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { User } from '../User';
import { Lead } from '../Lead';
import { Category } from '../Category';
import { Company, EditCompany } from '../Company';
import { Event } from '../Event';
import { Group } from '../Group';
import { People, EditPeople } from '../People';
import { Product } from '../Product';
import { Service } from '../Service';
import { Team } from '../Team';

const HomePageLayout = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">{children}</header>
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
          <PrivateRoute
            exact
            path="/company/edit/:editId"
            component={EditCompany}
          />
          <PrivateRoute
            exact
            path="/people/edit/:editId"
            component={EditPeople}
          />
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

export { App };
