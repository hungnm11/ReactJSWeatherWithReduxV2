import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    this.onShowMap();
  }

  componentDidUpdate() {
    this.onShowMap();
  }

  onShowMap() {
    const map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: { lat: -34.397, lng: 150.644 }
      // center: {
      //   lat: this.props.lat,
      //   lng: this.props.lon
      // }
    })

    const geocoder = new google.maps.Geocoder();
    this.geocodeAddress(geocoder, map);
  }

  geocodeAddress(geocoder, resultsMap) {
    const locate = this.props.locate.toString();
    
    geocoder.geocode({ 'address': locate }, (results, status) => {
      console.log('LOCATION==>', results);
      if (status === 'OK') {
        
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    })
  }

  render() {
    const locate = this.props.locate;
    
    return (
      <div ref="map" />
    )
  }
}

export default GoogleMap;