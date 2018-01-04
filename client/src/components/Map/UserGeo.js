import React, { Component } from 'react';

export class UserGeo extends Component {
  handleGeoPosition = (location) => {
    this.props.getCoords(location.coords);
    console.log(this.props.location);
  }

  getUserGeo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleGeoPosition);
    }
  }

  render() {
    return (
      <div>{this.location}</div>
    )
  }
}
