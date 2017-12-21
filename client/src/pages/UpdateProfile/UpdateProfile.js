import React, { Component } from 'react';
import { Btn, UserName, Password } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import { Header } from '../../components/Header';


class UpdateProfile extends Component {
  render () {
    return (
      <div className='content'>
        <Header />
        <Title>CHANGE YOUR SETTINGS</Title>
        <UserName />
        <Password />
        <Password />
        <Btn onClick={this.handleFormSubmit} > Submit </Btn>
      </div>
    );
  }
}

export default UpdateProfile;
