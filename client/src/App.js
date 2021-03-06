import React from 'react';
import Start from './pages/Start/Start.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import Landing from './pages/Landing/Landing.js';
import AddLoo from './pages/AddLoo/AddLoo.js';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { load, save } from 'redux-localstorage-simple';
import rootReducer from './rootReducer';

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => {
  const style = {
    width: '100%',
    height: '100%'
  };

  return (
    <Provider store={store}>
      <Router>
        <div style={style}>
          <Switch>
            <Route exact path='/' component={Start} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route path='/landing' component={Landing} />
            <Route exact path='/addloo' component={AddLoo} />
            <Route exact path='/account' component={UpdateProfile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
