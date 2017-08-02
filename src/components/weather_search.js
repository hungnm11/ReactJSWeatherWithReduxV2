import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
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
    console.log(event.target.value)
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // event.preventDefault();
    this.props.fetchCity(this.state.term);
    this.setState({ term: '' });
  }

  renderField(field) {
    return (
      <div>
        <input
          className={field.className}
          type={field.type}
          placeholder={field.placeholder}
          onChange={field.input.onChange}
          value={field.value}
        />
        <div className="text-danger">
        {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form-search">
        <h3>Weather App</h3>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} className="input-group">
          <Field
            name="search"
            type="text"
            className="form-control"
            component={this.renderField}
            placeholder="Enter location"
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

const validate = (values) => {
  const errors = {};
  console.log('Error', values)
  if (!values.search) {
    errors.search = 'Please enter your location.'
  }

  return errors;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchCity }, dispatch)
}

export default reduxForm({
  validate,
  form: 'searchForm'
})(connect(null, mapDispatchToProps)(WeatherSearch));