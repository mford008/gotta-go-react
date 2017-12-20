import React from 'react';
import Start from './pages/Start/Start.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import Landing from './pages/Landing/Landing.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  /*
  <Route exact path='/signup' component={Signup} />
  <Route exact path='/landing' component={Landing} />
  */

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Start} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/landing' component={Landing} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
