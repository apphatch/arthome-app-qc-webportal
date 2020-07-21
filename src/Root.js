/* This is the Root component mainly initializes Redux and React Router. */

import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import store, { persistor } from './common/store';
import routeConfig from './common/routeConfig';
import history from './common/history';
import { PersistGate } from 'redux-persist/integration/react';

setConfig({
  logLevel: 'debug',
});

function renderRouteConfigV3(routes, contextPath) {
  // Resolve route config object in React Router v3.
  const children = []; // children component list
  const root = JSON.parse(localStorage.getItem('persist:root'));
  let auth, token;
  if (root) {
    auth = root.auth
    if (auth) {
      token = JSON.parse(auth).token;
    }
  }

  const renderRoute = (item, routeContextPath) => {
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, '/');
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfigV3(item.childRoutes, newContextPath);
      if (item.role === 'protected') {
        children.push(
          <Route
            key={newContextPath}
            render={props =>
              !token ? (
                <item.component {...props}>{childRoutes}</item.component>
              ) : (
                <Redirect to={{ pathname: '/' }} />
              )
            }
            path={newContextPath}
          />,
        );
      } else if (item.role === 'privated') {
        children.push(
          <Route
            key={newContextPath}
            render={props =>
              token && token !== '' ? (
                <item.component {...props}>{childRoutes}</item.component>
              ) : (
                <Redirect to={{ pathname: '/auth/login' }} />
              )
            }
            path={newContextPath}
          />,
        );
      } else {
        children.push(
          <Route
            key={newContextPath}
            render={props => <item.component {...props}>{childRoutes}</item.component>}
            path={newContextPath}
          />,
        );
      }
    } else if (item.component) {
      if (item.role === 'protected') {
        children.push(
          <Route
            key={newContextPath}
            render={props =>
              !token ? <item.component {...props} /> : <Redirect to={{ pathname: '/' }} />
            }
            path={newContextPath}
            exact
          />,
        );
      } else if (item.role === 'privated') {
        children.push(
          <Route
            key={newContextPath}
            render={props =>
              token && token !== '' ? (
                <item.component {...props} />
              ) : (
                <Redirect to={{ pathname: '/auth/login' }} />
              )
            }
            path={newContextPath}
            exact
          />,
        );
      } else {
        children.push(
          <Route
            key={newContextPath}
            render={props => <item.component {...props} />}
            path={newContextPath}
            exact
          />,
        );
      }
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath));
    }
  };

  routes.forEach(item => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}

function Root() {
  const children = renderRouteConfigV3(routeConfig, '/');
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default hot(Root);
