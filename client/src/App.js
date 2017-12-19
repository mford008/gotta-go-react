import React, { Component } from 'react';

class App extends Component {
  state = {
    string: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      //Where our router will need to go
      // <main>
      //   <Switch>
      //     <Route exact path='/' component={Home}/>
      //     <Route path='/list' component={List}/>
      //     <Route path='/map' component={Map}/>
      //     <Route path='/Account' component={Account}/>
      //   </Switch>
      // </main>
      <div>
        <div className='form-group'>
          <input className='form-control'
          onChange={this.handleInputChange}
          name="string"
          />
          <p>{this.state.string}</p>
          <button>Click me</button>
        </div>
      </div>
    );
  }
}

export default App;
