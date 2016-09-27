import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component  {
  //make a render Helper function:
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp),
          (temp) => 1.8*(temp - 273) + 32);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    // ES6 restructuring:
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // become:
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart data={temps} color="pink" units="&deg;F"/>
        </td>
        <td>
          <Chart data={pressures} color="orange" units=" hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="blue" units=" %"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F) </th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

// this is the same as:
// function mapStateToProps(state) {
//   return { weather: weather };
// }

export default connect(mapStateToProps)(WeatherList);
