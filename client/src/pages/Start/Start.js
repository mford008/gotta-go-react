import React, { Component } from 'react';
import { Btn } from '../../components/Form';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';
import './Start.css';

class Start extends Component {
  state = {
    loading: true
  };

  componentDidMount () {
    // const timer = setTimeout(this.displaySpinner, 3000)
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords;
      this.setState({
        lat: coords.latitude,
        lng: coords.longitude
      });
      console.log(this.state)
    });
  }

  gotIt = event => {
    event.preventDefault();
    this.setState({ loading: false })
  }

  render () {

    if (this.state.loading) {
      return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
          <div ref='main' style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
            <div className='has-text-centered logo'>
              <img style={{ margin: '50px', height: '120px', width: 'auto' }}
                className='start-logo' src='../transp-gotta-go.png' alt='Gotta Go' />
            </div>
            <div className='intro has-text-centered'>
              <p><strong>Log in/Sign up</strong> to be able comment, save favorite places and add new locations.</p>
              <p> Or just use it for searching without registration.</p>
              <Btn style={{ backgroundColor: '#f78255' }}
                onClick={this.gotIt}>Got it</Btn>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
        <div ref='main' style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
          <div className='has-text-centered logo'>
            <img style={{ margin: '50px', height: '120px', width: 'auto' }}
              className='start-logo' src='../transp-gotta-go.png' alt='Gotta Go' />
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
            <Link to={'/landing/list'} >
              Just use it
            </Link>
          </Btn>
        </div>
      </div>
    );
  }
}

export default Start;

const getLocation = () => ({ welcome: 'Hello User' });

const store = createStore(
  getLocation,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());
