import React, { Component } from 'react';
import { Btn, InputField, Category, Comment, Form } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import { Header } from '../../components/Header';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'react-google-maps';

class AddLoo extends Component {
  state = {
    name: '',
    address: '',
    category: '',
    comment: ''
  };

  handleInputChange = event => {
    // let value = event.target.value;
    // const name = event.target.name;
    //
    // if (name === 'Address') {
    //   value = new google.maps.places.Autocomplete();
    // }
  };

  render () {
    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }} className='content'>
        <Header />
        <Title>ADD A RESTROOM</Title>
        <Form>
          <InputField
            value={this.state.name}
            name='name'
            type='text'
            placeholder='e.g. park, cafe'
            label='Location name'
          />
          <InputField
            value={this.state.address}
            name='address'
            type='text'
            placeholder='Enter address'
            label='Address'
            onChange={this.handleInputChange}
          />
          <Category />
          <Comment />
          <Btn onClick={this.handleFormSubmit}> Add Restroom </Btn>
        </Form>
      </div>
    );
  }
}
export default AddLoo;
