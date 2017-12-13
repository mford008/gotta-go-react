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
