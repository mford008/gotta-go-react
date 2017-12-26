import React, { Component } from 'react';
import { Btn, InputField, Form } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import { Header } from '../../components/Header';

class UpdateProfile extends Component {
  render () {
    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }} className='content'>
        <Header />
        <Title>ACCOUNT INFO</Title>
        <Form>
          <InputField type='text' placeholder='Enter username' label='Username' />
          <InputField type='password' placeholder='Enter password' label='Current password' />
          <InputField type='password' placeholder='Enter password' label='New password' />
          <InputField type='password' placeholder='Confirm password' label='Re-type new password' />
          <Btn onClick={this.handleFormSubmit} > Update </Btn>
        </Form>
      </div>
    );
  }
}

export default UpdateProfile;
