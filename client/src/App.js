import React from 'react';
import Start from './pages/Start/Start.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import { LandingList, LandingMap } from './pages/Landing';
import AddLoo from './pages/AddLoo/AddLoo.js';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const style = {
    width: '100%',
    height: '100%'
  };

  return (
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
  );
};

export default App;
