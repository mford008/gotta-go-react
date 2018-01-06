import React from 'react';
import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const Map = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 37.8720727, lng:  -122.2712664 }}
  >
    <Marker position={{ lat: 37.8720727, lng:  -122.2712664 }} />
  </GoogleMap>
)
