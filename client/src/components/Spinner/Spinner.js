import React, { Component } from 'react';

export class Spinner extends Component {
  render () {
    return (
      <div className='has-text-centered spinnerDiv'>
        <img className="spinner" src="./Rolling.svg" />
      </div>
    );
  }
}
