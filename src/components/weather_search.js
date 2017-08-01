import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCity } from '../actions/index';
import GoogleMap from './google_map';

class WeatherSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchCity(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1 className="align-middle">Weather App</h1>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input 
            className="form-control" 
            onChange={this.onInputChange}
            value={this.state.term}
          />
          <span className="input-group-btn">
            <button tyep="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchCity }, dispatch)
}

export default connect(null, mapDispatchToProps)(WeatherSearch);