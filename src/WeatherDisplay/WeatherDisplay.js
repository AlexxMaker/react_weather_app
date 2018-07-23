import React, { Component } from 'react';
import "./WeatherDisplay.css";
import {PageHeader} from 'react-bootstrap'

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
          <div className="weather-wrapper">
            <div className="weather-data">
              <div className="weather-header">
                <PageHeader>
                  
                    <h1>{weatherData.name} - {weatherData.sys.country}</h1>
                  
                </PageHeader>
            </div>

            <div>
              <div className="weather-current">
              <div className="left">
                <img className="icon" src={iconUrl} alt={weatherData.description} />
              </div>
              
              <div className="right">
                <h1 className="temp">{currentTemp}C°</h1>
              </div>
              <div className="main">
                <h2>{weather.main}</h2>
              </div> 
              </div>

              <div className="weather-numbers">
                <p>High: {weatherData.main.temp_max}°</p>
                <p>Low: {weatherData.main.temp_min}°</p>
                <p>Wind Speed: {weatherData.wind.speed} km/hr</p>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
              </div>

            </div>
            </div>
          </div>
    );
        
    }
}

export default WeatherDisplay;