import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import GoogleMap from './google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name} >
        <td><GoogleMap lon={lon} lat={lat} /></td>
      </tr>
    )
  }

  render() {
    console.log('LIST', this.props);
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

const styles = {
  height: 100
}

const mapStateToProps = ({ weather }) => {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);