import React, { Component } from 'react';
import { Btn, UserName, Password } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import './Login.css';

class Login extends Component {
  render () {
    return (
      <div className='content'>
        <Title>WELCOME BACK!</Title>
        <form name='form2'>
          <div className="columns">
            <div className="column">
              <UserName />
              <Password/>
              <Btn
                onClick={this.handleFormSubmit}
              >
                Log in
              </Btn>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
