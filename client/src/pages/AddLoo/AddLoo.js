import React, { Component } from 'react';
import { Btn, Location, Address, Category, Comment } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';

class AddLoo extends Component {
  render () {
    return (
      <div className='content'>
        <Title>ADD A RESTROOM</Title>
        <Location />
        <Address />
        <Category />
        <Comment />
        <Btn onClick={this.handleFormSubmit}> Add Restroom </Btn>
      </div>
    );
  }
}
export default AddLoo;
