import React, { Component } from 'react';
import "./WeatherDisplay.css";
import {Well, Grid, Row, Col} from 'react-bootstrap'

class WeatherDisplay extends Component {
  state = {
          weatherData: null
      }

    render() {
        const zip = this.props.zip;
        const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
          zip +
          "&appid=45f336bc325b0b64d6431d7166aa1df6&units=metric";
        fetch(URL).then(res => res.json()).then(json => {
          this.setState({ weatherData: json });
        });
        
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading...</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        const currentTemp = Math.round(weatherData.main.temp);
        return (
          <Grid className="weather-data">
            <Row>
              <Col md={12}>
                <Well bsSize="small">
                    <h2>{weatherData.name} - {weatherData.sys.country}</h2>
                </Well>
                </Col>
            </Row>

            <div>
              <Row>
            <Col md={6} sm={6} xs={12}>
            <Well>
              <div className="weather-current">
                <img className="icon" src={iconUrl} alt={weatherData.description} />
                <p className="temp"><span className="orange">{currentTemp}</span>°C</p>
                <h1>{weather.main}</h1>
              </div>
              </Well>
              </Col>
              
              <Col md={6} sm={6} xs={12}>
              
              <div className="weather-numbers">
                <p>High: {weatherData.main.temp_max}°C</p>
                <p>Low: {weatherData.main.temp_min}°C</p>
                <p>Wind Speed: {weatherData.wind.speed} km/hr</p>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
              </div>
            
              </Col>
              </Row>
            </div>
          </Grid>
    );
        
    }
}

export default WeatherDisplay;