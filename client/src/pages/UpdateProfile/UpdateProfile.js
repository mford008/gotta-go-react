import React, { Component } from 'react';
import { Btn, InputField, Form } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import Header from '../../components/Header/Header.js';
import API from '../../utils/API'

class UpdateProfile extends Component {
  state = {
    username: '',
    password: '',
    newPassword: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    this.updatePassword();
  }

  updatePassword = () => {
    API.changePassword(this.state);
    console.log('password changed');
  }

  render () {
    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }} className='content'>
        <Header />
        <Title>ACCOUNT INFO</Title>
        <Form>
          <InputField
            type='text'
            placeholder='Enter username'
            label='Username'
            value={this.state.username}
            onChange={this.handleChange}
            name='username'

            />
          <InputField
            type='password'
            placeholder='Enter password'
            label='Current password'
            value={this.state.password}
            onChange={this.handleChange}
            name='password'

            />
          <InputField
            type='password'
            placeholder='Enter password'
            label='New password'
            value={this.state.newPassword}
            onChange={this.handleChange}
            name='newPassword'

            />
          <Btn onClick={this.handleFormSubmit} > Update </Btn>
        </Form>
      </div>
    );
  }
}

export default UpdateProfile;
