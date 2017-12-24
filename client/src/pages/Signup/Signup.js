import React, { Component } from 'react';
import { Btn, InputField, Form } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import { Header } from '../../components/Header';

class Signup extends Component {
  render () {
    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }} className='content'>
        <Header />
        <Title>WELCOME!</Title>
        <Form>
          <InputField type='text' placeholder='Enter username' label='Username' />
          <InputField type='password' placeholder='Enter password' label='Password' />
          <InputField type='password' placeholder='Enter password' label='Confirm password' />
          <Btn
            onClick={this.handleFormSubmit}
            >
              Sign up
            </Btn>
        </Form>
      </div>
    );
  }
}

export default Signup;
