import React, { Component } from 'react';
import { Btn } from '../../components/Form';
import { Link } from 'react-router-dom';
import './Start.css';

class Start extends Component {

  render () {
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
        <div className='has-text-centered logo'>
          <img style={{ margin: '50px', height: '120px', width: 'auto' }} className='start-logo' src='../transp-gotta-go.png' alt='Gotta Go' />
        </div>

        <div className='intro has-text-centered'>
          <p><strong>Log in/Sign up</strong> to be able comment, save favorite places and add new locations.</p>
          <p> Or just use it for searching without registration.</p>
        </div>

        <Btn style={{ backgroundColor: '#f78255' }} >
          <Link to={'/login'}>
            Log in
          </Link>
        </Btn>
        <Btn style={{ backgroundColor: '#f78255' }} >
          <Link to={'/signup'}>
            Sign up
          </Link>
        </Btn>
        <Btn style={{ backgroundColor: '#f78255' }} >
          <Link to={'/landing'}>
            Just use it
          </Link>
        </Btn>
      </div>
    );
  }
}

export default Start;
