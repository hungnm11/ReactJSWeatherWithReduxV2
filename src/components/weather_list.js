import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderTimestamp } from '../actions/index';
import GoogleMap from './google_map';

class WeatherList extends Component {

  renderTimestamp(time) {
    const d = new Date(time * 1000);
    let timestamp = '';
    let day = d.getDate();
    let month = d.getMonth() + 1;
    const hours = d.getHours() >= 10 ? d.getHours() : `0${d.getHours()}`;
    const min = d.getMinutes() >= 10 ? d.getMinutes() : `0${d.getMinutes()}`;
    day = day >= 10 ? day : `0${day}`;
    month = month >= 10 ? month : `0${month}`;
    const year = d.getFullYear() >= 10 ? d.getFullYear() : `0${d.getFullYear()}`;
    const _day = `${day}.${month}.${year}`;
    const _time = `${hours}:${min}`;
    timestamp = `${_day}, ${_time}`;
    return timestamp;
  }

  renderWeather() {
    const { timezone, currently: { time } } = this.props.weather.data;
    const timestamp = this.renderTimestamp(time);
    return (
      <div>
        <p className="h4">Local Weather</p>
        <div className="col-4"><h1 className="display-4">{timezone}</h1></div>
        <div className="col-8">{timestamp}</div>

        <table className="table table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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