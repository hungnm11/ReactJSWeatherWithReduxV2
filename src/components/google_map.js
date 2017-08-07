import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';

class GoogleMap extends Component {
  componentDidMount() {
    // this.onShowMap();
    this.getGeolocation();
  }

  componentDidUpdate() {
    this.onShowMap();
  }

  getGeolocation() {
    console.log('Got it');
    const map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: { lat: -34.397, lng: 150.644 }
    });

    const infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      console.log('get Location');
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        infoWindow.setPosition(pos);
        infoWindow.setContent('Your Location');
        infoWindow.open(map);
        map.setCenter(pos);
      });
    }
  }

  onShowMap() {
    const map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: { lat: -34.397, lng: 150.644 }
    })

    const geocoder = new google.maps.Geocoder();
    this.geocodeAddress(geocoder, map);
  }

  geocodeAddress(geocoder, resultsMap) {
    const locate = this.props.locate;

    geocoder.geocode({ 'address': locate }, (results, status) => {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        this.props.fetchData({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        });
        console.log('lat & lng ==>', results[0].geometry.location.lat(), results[0].geometry.location.lng());
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    })
  }

  render() {
    return (
      <div ref="map" />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(GoogleMap);