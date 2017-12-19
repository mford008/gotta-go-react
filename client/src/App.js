import React from 'react';
import Start from './pages/Start/Start.js';
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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
