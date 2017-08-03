import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLatLng } from '../actions/index';

class GoogleMap extends Component {
  componentDidMount() {
    // this.onShowMap();
  }

  componentDidUpdate() {
    this.onShowMap();
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
    const locate = this.props.locate.toString();
    
    geocoder.geocode({ 'address': locate }, (results, status) => {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        this.props.getLatLng({
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
    console.log('GOOooooo', this.props);
    return (
      <div ref="map" />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getLatLng }, dispatch);
}

export default connect(null, mapDispatchToProps)(GoogleMap);