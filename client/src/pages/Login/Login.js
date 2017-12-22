import React, { Component } from 'react';
import { Btn, InputField, Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title/Title.js';
import './Login.css';

class Login extends Component {
  render () {
    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }} className='content'>
        <Header />
        <Title>WELCOME BACK!</Title>
        <Form>
          <InputField type='text' placeholder='Enter username' label='Username'/>
          <InputField type='password' placeholder='Enter password' label='Password'/>
          <Btn
            onClick={this.handleFormSubmit}
          >
            Log in
          </Btn>
        </Form>
      </div>
    );
  }
}

export default Login;
