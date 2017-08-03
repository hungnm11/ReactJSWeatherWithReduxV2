import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './google_map';

class WeatherList extends Component {

  renderWeather() {
    const { location } = this.props;
    const { fetched, data } = this.props.weather;
    const className = location.length > 0 ? 'show' : 'hide';

    return (
      <div className={`show-map ${className}`}>
        <GoogleMap locate={location} /> 
        <dl className="row">
          <dt className="col-sm-3"><p className="h4">Local Weather</p></dt>
          <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

          <dt className="col-sm-3">Euismod</dt>
          <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
          <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

          <dt className="col-sm-3">Malesuada porta</dt>
          <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

          <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
          <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

          <dt className="col-sm-3">Nesting</dt>
          <dd className="col-sm-9">
            <dl className="row">
              <dt className="col-sm-4">Nested definition list</dt>
              <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
            </dl>
          </dd>
        </dl>
      </div>
    );
  }

  render() {
    
    console.log(this.props.weather)
    return (
      this.renderWeather()
    )
  }
}

const mapStateToProps = ({ weather, location }) => {
  return { weather, location };
}

export default connect(mapStateToProps)(WeatherList);