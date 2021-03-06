import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Btn } from '../../components/Form';
import { Link } from 'react-router-dom';
import { getLocation, resetGeo } from '../../components/Map/actions';
import './Start.css';

class Start extends Component {
  state = {
    loading: true
  };

  componentDidMount () {
    const { getLocation } = this.props;
    resetGeo();
    getLocation();
  }

  gotIt = event => {
    event.preventDefault();
    this.setState({ loading: false })
  }

  render () {
    const { position } = this.props;
    if (this.state.loading) {
      return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
          <div ref='main' style={{ width: '100%', height: '100%', backgroundColor: '#393f60' }}>
            <div className='has-text-centered logo'>
              <img style={{ margin: '20px', height: '120px', width: 'auto' }}
               className='start-logo' src='../transp-gotta-go.png' alt='Gotta Go' />
            </div>
            <div className='intro has-text-centered'>
              <p>
                <strong>Log in/Sign up
                to be able comment, save favorite places and add new locations.</strong></p>
              <p> Or just use it for browsing.</p>
              <Btn style={{ backgroundColor: '#f78255' }}
                onClick={this.gotIt}>Got it</Btn>
             <div style={{ marginTop: '30px' }}>
              <img src='./114081-OOR1BA-474.png'
                style={{
                  marginTop: '20px',
                  width: '220px',
                  height: '220px',
                  margin: '0',
               }}/>
              </div>
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
          <div className='intro has-text-centered'>
            {/* <p>
              <strong>Log in/Sign up </strong>
               to be able comment, save favorite places and add new locations.</p>
            <p> Or just use it for browsing.</p> */}
          </div>
          <div style={{ marginTop: '60px' }}>
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
