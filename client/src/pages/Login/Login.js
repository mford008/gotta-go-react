import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Btn, InputField, Form } from '../../components/Form';
import Header from '../../components/Header/Header.js';
import { Title } from '../../components/Title/Title.js';
import './Login.css';
import API from '../../utils/API';

class Login extends Component {
  state = {
    username: '',
    password: '',
    user: false,
    error: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  checkUser = () => {
    API.checkUser(this.state)
    .then(res => {
      if (res.data.user === true) {
        this.props.history.push('/landing/list')
      } else if (res.data.user === 'username not found') {
        this.setState({ error: 'Username not found' })
      } else if (res.data.user === 'wrong password') {
        this.setState({ error: 'Incorrect password' })
      }
    })
    .then(this.setState({username: '', password: ''}))
    .catch(error => console.error('Error', error))
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
            onClick={this.checkUser}>
            Log in
          </Btn>
          <div className="has-text-centered">
            <h4>{this.state.error}</h4>
          </div>
          <div className="has-text-centered">
            <Link to='/signup'>
              Not yet a member? Signup!
            </Link>
          </div>

        </Form>
      </div>
    );
  }
}

export default Login;
