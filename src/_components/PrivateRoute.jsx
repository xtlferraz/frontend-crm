import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { DefaultLayout } from './DefaultLayout';

export const PrivateRoute = ({
  component: Component,
  layout: Layout = DefaultLayout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('user') ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
