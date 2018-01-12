import React, { Component } from 'react';
import { Btn, InputField, Form } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import Header from '../../components/Header/Header.js';
import API from '../../utils/API'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    passConfirm: '',
    error: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    if (this.state.password === this.state.passConfirm) {
      this.sendUser();
    } else {
      this.setState({ error: 'We have a password mismatch'})
    }
  }

  sendUser = () => {
    API.addUser(this.state)
    .then(res => {
      this.props.history.push('/landing/list')
      console.log({ results: res.data })
    })
    .then(this.setState({username: '', password: ''}))
    .catch(error => console.error('Error', error))
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
          <InputField
            type='password'
            placeholder='Re-enter password'
            label='Confirm password'
            value={this.state.passConfirm}
            onChange={this.handleChange}
            name='passConfirm'
          />
          <Btn
            onClick={this.handleFormSubmit}
            >
              Sign up
            </Btn>
        </Form>
        <h3>{this.state.error}</h3>
      </div>
    );
  }
}

export default Signup;
