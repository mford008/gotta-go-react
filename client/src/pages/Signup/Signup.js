import React, { Component } from 'react';
import { Btn, UserName, Password } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';

class Signup extends Component {
  render () {
    return (
      <div className='content'>
        <Title>WELCOME!</Title>
        <UserName/>
        <Password/>
        <Password/>
        <Btn
          onClick={this.handleFormSubmit}
        >
          Sign up
        </Btn>
      </div>
    );
  }
}

export default Signup;
