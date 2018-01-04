import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
// import { ListContainer, ListItem, CommentContainer, CommentItem } from "../../components/List";
import { Header } from '../../components/Header';
import { Map, MapContainer } from '../../components/Map';
import { Marker } from 'react-google-maps';
import { Link } from 'react-router-dom';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { TabGroup, SingleTab } from '../../components/TabGroup';

class LandingMap extends Component {
  state = {
    // since the mongoose call returns an array of all the restrooms in the DB,
    // we can store them in an array and use the .map function to get info from
    // every item in the respone (res.data)
    restroomList: []
    // commentList: []
  }

  componentDidMount () {
    API.loadRestrooms()
    .then(res => this.setState({ restroomList: res.data }))
    .then(this.gettingGeo())
    // .then(res => this.setState({ restroomList: res.data }))
    .catch(err => console.log(err))

    // API.loadComments()
    // .then(res => this.setState({ commentList: res.data }))
    // .then(console.log('comment test'))
    // .catch(err => console.log(err));
  }

  gettingGeo() {
    this.state.restroomList.map(restroom => (
      geocodeByAddress(restroom.location)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error))
    ))
  }


  render () {
    return (
      <div>
        <Header />
        <TabGroup>
          <SingleTab link={'/landing-map'} icon={'fa fa-map'}>
            Map
          </SingleTab>
          <SingleTab link={'/landing'} icon={'fa fa-list'}>
            List
          </SingleTab>
        </TabGroup>
        <MapContainer>
            <Map>
              {/* {this.state.restroomList.map(restroom => (
                <Marker key={restroom._id}
                  position={restroom.location}/>
              ))} */}
            </Map>
        </MapContainer>
      </div>
    );
  }
}

export default LandingMap;
