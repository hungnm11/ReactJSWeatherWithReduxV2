import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderTimestamp } from '../actions/index';
import GoogleMap from './google_map';

class WeatherList extends Component {

  renderTimestamp(time) {
    return new Date(time * 1000).toGMTString();
  }

  toCelsius(f) {
    return Math.floor((5/9) * (f-32));
  }

  renderWeather() {
    const { timezone, currently: { apparentTemperature, humidity, dewPoint, time, icon, temperature } } = this.props.weather.data;
    const timestamp = this.renderTimestamp(time);
    const celsius = this.toCelsius(temperature);
    const name = timezone.substr(timezone.indexOf('/') + 1);
    return (
      <div>
        <p className="h4">Local Weather</p>
        <div className="col-8">{timestamp}</div>
        <div className="col-4"><h1 className="display-4">{name}</h1></div>
        <h1 className="display-2">{celsius}&#8451;</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Humidity (%)</th>
              <th>Dew Point Temperature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{celsius}&#8451;</td>
              <td>{humidity}</td>
              <td>{dewPoint} &#8457;</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    const { location: { located } } = this.props;
    console.log('PROPS', this.props);
    return (
      <div className="show-map">
        <GoogleMap locate={located} />
        {this.props.weather.isFetching && <div>Loading...</div>}
        {Object.keys(this.props.weather.data).length ? this.renderWeather() : null}
      </div>
    )
  }
}

const mapStateToProps = ({ location, weather }) => {
  return { location, weather };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ renderTimestamp }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);