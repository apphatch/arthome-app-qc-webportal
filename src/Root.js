/* This is the Root component mainly initializes Redux and React Router. */

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
// import { setConfig } from 'react-hot-loader';
// import { hot } from 'react-hot-loader/root';
import store, { persistor } from './common/store';
import history from './common/history';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

// setConfig({
//   logLevel: 'debug',
// });

function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

// export default hot(Root);
export default Root;
