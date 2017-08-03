import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './google_map';

class WeatherList extends Component {

  render() {
    const { location } = this.props; 
    console.log('API', this.props.weather);
    return (
      <div className="show-map">
        <GoogleMap locate={location} />
      </div>
    )
  }
}

const mapStateToProps = ({ weather, location }) => {
  return { weather, location };
}

export default connect(mapStateToProps)(WeatherList);