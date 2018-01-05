import React, { Component } from 'react';
import { Btn, InputField, Category, Comment, Form, AutocompleteInput } from '../../components/Form';
import { Title } from '../../components/Title/Title.js';
import Header from '../../components/Header/Header.js';
import API from '../../utils/API';

class AddLoo extends Component {
  state = {
    name: '',
    location: '',
    category: '',
    comment: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    API.addLoo(this.state)
    .then(res => console.log({ results: res.data }))
    // .then(res => this.setState({ results: res.data }))
    .catch(err => console.log(err));
  }

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
            onChange={this.handleInputChange}
          />
          <AutocompleteInput />
          <Category
            value={this.state.category}
            name='category'
            onChange={this.handleInputChange}
          />
          <Comment
            value={this.state.comment}
            name='comment'
            onChange={this.handleInputChange}
          />
          <Btn onClick={this.handleFormSubmit}> Add Restroom </Btn>
        </Form>
      </div>
    );
  }
}
export default AddLoo;
