import React from 'react';
import Start from './pages/Start/Start.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import Landing from './pages/Landing/Landing.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// class App extends Component {
//   state = {
//     string: ''
//   }
//
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
//
//   render () {
//     return (
//       <div>
//         <div className='form-group'>
//           <input className='form-control'
//           onChange={this.handleInputChange}
//           name="string"
//           />
//           <p>{this.state.string}</p>
//           <button>Click me</button>
//         </div>
//         <br />
//         <p> start component here </p>
//         <br />
//         <Start />
//       </div>
//     );
//   }
// }

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
