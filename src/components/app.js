import React, { Component } from 'react';
import WeatherSearch from './weather_search';
import WeatherList from './weather_list';

class App extends Component {
  render() {
    return (
      <div>
        <WeatherSearch />
        <WeatherList />
      </div>
    );
  }
}

export default App;