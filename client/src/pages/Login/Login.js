import React, { Component } from 'react';
import { Btn } from '../../components/Button/Button.js';
import { InputField } from '../../components/Form/InputField.js';
// import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  render () {
    return (
      <div className='content'>
        <div className='columns'>
          <div className='column has-text-centered title'>
            <div>
              <h2>WELCOME BACK!</h2>
            </div>
          </div>
        </div>
        <InputField
          type='text'
          label='Username'
          name='username'
          placeholder='enter username'
        />
        <InputField
          type='password'
          label='Password'
          name='password'
          placeholder='enter password'
        />
        <Btn
          onClick={this.handleFormSubmit}
        >
          Log in
        </Btn>
      </div>
    );
  }
}

export default Login;
