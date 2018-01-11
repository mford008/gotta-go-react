import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Btn } from '../../components/Form';
import { Link } from 'react-router-dom';
import { getLocation } from '../../components/Map/actions';
import './Start.css';

class Start extends Component {
  state = {
    loading: true
  };

  componentDidMount () {
    // navigator.geolocation.getCurrentPosition(pos => {
    //   const coords = pos.coords;
    //   this.setState({
    //     lat: coords.latitude,
    //     lng: coords.longitude
    //   });
    //   console.log(this.state)
    // });
    const { getLocation, isLoaded } = this.props;
    if (!isLoaded) {
      getLocation();
    }
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
              <p>
                <strong>Log in/Sign up</strong>
                to be able comment, save favorite places and add new locations.</p>
              <p> Or just use it for searching without registration.</p>
              <Btn style={{ backgroundColor: '#f78255' }}
                onClick={this.gotIt}>Got it</Btn>
            </div>
          </div>
        </div>
      );
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

const mapStateToProps = state => ({
  position: state.position.data,
  isLoaded: state.position.locationLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLocation,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Start);
