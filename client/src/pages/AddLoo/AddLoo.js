import React, { Component } from 'react';
import { Btn, InputField, Category, Comment, Form } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import { Header } from '../../components/Header';

class AddLoo extends Component {
  render () {
    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }} className='content'>
        <Header />
        <Title>ADD A RESTROOM</Title>
        <Form>
          <InputField type='text' placeholder='e.g. park, cafe' label='Location name' />
          <InputField type='text' placeholder='Enter address' label='Address' />
          <Category />
          <Comment />
          <Btn onClick={this.handleFormSubmit}> Add Restroom </Btn>
        </Form>
      </div>
    );
  }
}
export default AddLoo;
