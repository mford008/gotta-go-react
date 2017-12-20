import React from 'react';
import Signup from './pages/Signup/Signup.js';
import Login from './pages/Login/Login.js';
import Landing from './pages/Landing/Landing.js';
import Start from './pages/Start/Start.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
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
