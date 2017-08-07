import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { getLocation } from '../actions/index';

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
    // event.preventDefault();
    
    this.props.getLocation(this.state.term);
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
        <h3>Weather Forecast</h3>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} className="input-group">
          <Field
            name="search"
            type="text"
            className="form-control"
            component={this.renderField}
            placeholder="Enter location"
            onChange={this.onInputChange}
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
  if (!values.search) {
    errors.search = 'Please enter your location.'
  }

  return errors;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getLocation }, dispatch);
}

export default reduxForm({
  validate,
  form: 'searchForm'
})( connect(null, mapDispatchToProps)(WeatherSearch));