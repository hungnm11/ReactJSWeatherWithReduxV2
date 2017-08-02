import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log('cityData', cityData);
    const name = cityData.city.name;
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name} >
        <td><GoogleMap lon={lon} lat={lat} /></td>
      </tr>
    )
  }

  render() {
    
    const { lon, lat } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
} 

const mapStateToProps = ({ weather }) => {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);