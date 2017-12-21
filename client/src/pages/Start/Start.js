import React, { Component } from 'react';
import { Btn } from '../../components/Form';
import { Link } from 'react-router-dom';
import './Start.css';

class Start extends Component {

  render () {
    return (
      <div>
        <div className='has-text-centered logo'>
          <img className='start-logo' src='../transp-gotta-go.png' alt='Gotta Go' />
        </div>

        <div className='intro has-text-centered'>
          <p><strong>Log in/Sign up</strong> to be able comment, save favorite places and add new locations.</p>
          <p> Or just use it for searching without registration.</p>
        </div>

        <Btn >
          <Link to={'/login'}>
            Log in
          </Link>
        </Btn>
        <Btn >
          <Link to={'/signup'}>
            Sign up
          </Link>
        </Btn>
        <Btn>
          <Link to={'/landing'}>
            Just use it
          </Link>
        </Btn>
      </div>
    );
  }
}

export default Start;
