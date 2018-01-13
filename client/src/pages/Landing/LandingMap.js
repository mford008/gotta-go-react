import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import Map from '../../components/Map/Map';
import MapContainer from '../../components/Map/MapContainer';
import { Marker, Icon } from 'react-google-maps';

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
              { this.state.restroomList.map(restroom => (
                // switch (restroom.category) {
                //   case 'gas station':
                //     return {
                //       <a><Marker key={restroom._id}
                //         position={{ lat: restroom.lat, lng: restroom.lng }}
                //         label='G'
                //       /></a>
                //     };
                //   case 'restaurant':
                //     return {
                //       <Marker key={restroom._id}
                //         position={{ lat: restroom.lat, lng: restroom.lng }}
                //         label='R'
                //       />
                //     }
                //   default:
                //     return {
                //       <Marker key={restroom._id}
                //         position={{ lat: restroom.lat, lng: restroom.lng }}
                //         label='O'
                //       />
                //     }
                // }
                <Marker key={restroom._id}
                    position={{ lat: restroom.lat, lng: restroom.lng }}
                    label='R'
                />
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
