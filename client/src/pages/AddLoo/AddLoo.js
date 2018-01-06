import React, { Component } from 'react';
import { Btn, InputField, Category, Comment, Form, AutocompleteInput } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
// import { Header } from '../../components/Header';
import Header from '../../components/Header/Header.js';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import API from '../../utils/API';

class AddLoo extends Component {
  state = {
    name: '',
    location: '',
    category: '',
    comment: '',
    coords: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleFormSubmit = event => {
    event.preventDefault();

    //
    // geocodeByAddress(this.state.address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error))

    // console.log(this.state)
    API.addLoo(this.state)
    .then(res => console.log({ results: res.data }))
    
    .catch(err => console.log(err));
  }

  render () {
    return (
      <div style={{ backgroundColor: '#f9fafb', width: '100%', height: '100%' }}
           className='content'>
        <Header />
        <Title>ADD A RESTROOM</Title>
        <Form>
          <InputField
            value={this.state.name}
            name='name'
            type='text'
            placeholder='e.g. park, cafe'
            label='Location name'
            onChange={this.handleInputChange}
          />
          <AutocompleteInput />
          <br />
          <br />
          <Category
            label='Select Category'
            value={this.state.category}
            name='category'
            onChange={this.handleChange}
          />
          <Comment
            value={this.state.comment}
            placeholder='Leave comment here'
            name='comment'
            label='Comment (optional)'
            onChange={this.handleInputChange}
          />
          <Btn onClick={this.handleFormSubmit}> Add Restroom </Btn>
        </Form>
      </div>
    );
  }
}
export default AddLoo;
