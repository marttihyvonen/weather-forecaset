import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td width="300">
                    <Chart data={temps} color="orange" units="K" />
                </td>
                <td width="300">
                    <Chart data={pressures} color="red" units="hPA" />
                </td>
                <td width="300">
                    <Chart data={humidities} color="green" units="%" />
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
                        <th>Temperature (K)</th>
                        <th>Pressure (hPA)</th>
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

function mapStateToProps({weather}) {
    return { weather } // { weather } === { weather: weather} ES6 syntax
}

export default connect(mapStateToProps)(WeatherList);
