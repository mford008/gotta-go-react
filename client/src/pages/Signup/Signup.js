import React, { Component } from 'react';
import { Btn, InputField, Form } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import Header from '../../components/Header/Header.js';
import API from '../../utils/API'

class Signup extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.sendUser();
  }

  sendUser = () => {
    API.addUser(this.state)
    .then(res => console.log({ results: res.data }))
    .catch(err => console.log(err))
  }


  render () {
    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }} className='content'>
        <Header />
        <Title>WELCOME!</Title>
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
            label='Password'
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
           />
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
