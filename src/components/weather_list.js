import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './google_map';

class WeatherList extends Component {

  renderWeather() {
    return (
      <div>Data Loaded...</div>
    )
  }
  
  render() {
    const { location: { located } } = this.props;
    console.log('PROPS===>', this.props.weather.data.length)
    return (
      <div className="show-map">
        <GoogleMap locate={located} />
        {this.props.weather.isFetching && <div>Loading...</div>}
        {this.props.weather.data.length ? this.renderWeather() : null}
      </div>
    )
  }
}

const mapStateToProps = ({ location, weather }) => {
  return { location, weather };
}

export default connect(mapStateToProps)(WeatherList);