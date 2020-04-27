import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Dashboard from './Pages/Dashboard';
export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/dashboard/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
