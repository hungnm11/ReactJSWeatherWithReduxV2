import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './google_map';

class WeatherList extends Component {

  render() {
    const { location } = this.props; 
    return (
      <div className="show-map">
        <GoogleMap locate={location} />
      </div>
    )
  }
}

const mapStateToProps = ({ location }) => {
  return { location };
}

export default connect(mapStateToProps)(WeatherList);