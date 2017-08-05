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
    const { timezone, currently: { apparentTemperature, humidity, dewPoint, time } } = this.props.weather.data;
    const timestamp = this.renderTimestamp(time);
    const celsius = this.toCelsius(apparentTemperature);
    return (
      <div>
        <p className="h4">Local Weather</p>
        <div className="col-4"><h1 className="display-4">{timezone}</h1></div>
        <div className="col-8">{timestamp}</div>

        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Humidity (%)</th>
              <th>Dew Point Temperature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{celsius} &#8451;</td>
              <td>{humidity}</td>
              <td>{dewPoint}</td>
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