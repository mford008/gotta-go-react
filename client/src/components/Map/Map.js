import React from 'react';
import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Map = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `580px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withGoogleMap
)((props) => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker
        label='Y'
        position={{ lat: props.lat, lng: props.lng }}
      />
      {props.children}
    </GoogleMap>
  );
}
);

function mapStateToProps (dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(state => {
  console.log('=================');
  console.log(state.position);
  return {
    lat: state.position.latitude,
    lng: state.position.longitude
  };
}, mapStateToProps)(Map);
