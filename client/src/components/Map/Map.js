import React from 'react';

const Map = () => {
  function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }

  return (
    <iframe
      src='https://www.google.com/maps/embed/v1/place?q=Uluru&key=AIzaSyAO6DPj2O5ahIC8Pr36AL6nQDUH0APPmyM' allowfullscreen />
  );
};

export default Map;
