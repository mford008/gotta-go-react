import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { Map, MapContainer } from '../../components/Map';
import { Marker } from 'react-google-maps';
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class LandingMap extends Component {
  state = {
    restroomList: []
  };

  componentDidMount () {
    API.loadRestrooms()
      .then(res => {
        console.log(res.data); return res;
      })
      .then(res => this.setState({ restroomList: res.data }))
      .catch(err => console.log(err));
  }

  render () {
    try {
      return (
        <div>
          <MapContainer>
              <Map>
                {this.state.restroomList.map(restroom => (
                  <Marker key={restroom._id}
                    position={{ lat: restroom.lat, lng: restroom.lng }} />
                ))}
              </Map>
          </MapContainer>
        </div>
      );
    } catch (e) {
      return <pre><code>{ e.message }</code></pre>;
    }
  }
}

export default LandingMap;
