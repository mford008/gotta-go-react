import React, { Component } from 'react';
import { Btn, InputField, Form } from '../../components/Form';
import Header from '../../components/Header/Header.js';
import { Title } from '../../components/Title/Title.js';
import './Login.css';
import API from '../../utils/API'


class Login extends Component {
  state = {
    username: '',
    password: '',
    user: false
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    this.checkUser();
  }

  checkUser = () => {
    API.checkUser(this.state)
    .then(res => {
      if (res.data.user) {
      console.log('we can has user');
    }})
    .catch(err => console.log(err))
  }

  render () {

    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }} className='content'>
        <Header />
        <Title>WELCOME BACK!</Title>
        <Form style={{ alignItems: 'left' }}>
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
            label='Password'
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
           />
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
