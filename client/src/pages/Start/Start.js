import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Btn } from '../../components/Form';
import { Link } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import { getLocation, resetGeo } from '../../components/Map/actions';
import './Start.css';

class Start extends Component {
  state = {
    loading: true
  };

  componentDidMount () {
    setTimeout(() => this.setState({ loading: false }), 3000);
    const { getLocation, resetGeo } = this.props;
    resetGeo();
    getLocation();

  }

  render () {
    const { loading } = this.state;
    if (loading) {
      <div style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
        <div ref='main' style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
          <Spinner />
        </div>
      </div>
    }
    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
        <div ref='main' style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
          <div className='has-text-centered logo'>
            <img style={{ margin: '50px', height: '120px', width: 'auto' }}
              className='start-logo' src='../transp-gotta-go.png' alt='Gotta Go' />
          </div>
          <div className='intro has-text-centered'>
            <p>
              <strong>Log in/Sign up </strong>
               to be able comment, save favorite places and add new locations.</p>
            <p> Or just use it for browsing.</p>
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
  position: state.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLocation,
  resetGeo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Start);
