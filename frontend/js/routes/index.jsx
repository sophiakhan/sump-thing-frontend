import React from 'react';
import { Route } from 'react-router-dom';
import AuthenticatedRoute from 'js/common/components/AuthenticatedRoute';

import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Settings from './Dashboard/Settings';

const routes = [
  <Route exact path="/" component={Landing} />,
  <Route path="/login" component={Login} />,
  <Route path="/signup" component={Signup} />,
  <AuthenticatedRoute path="/dashboard" exact component={Dashboard} />,
  <AuthenticatedRoute path="/dashboard/settings" component={Settings} />,
];

export default routes;
