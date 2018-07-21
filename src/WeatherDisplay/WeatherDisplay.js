import React, { Component } from 'react';

class WeatherDisplay extends Component {
  state = {
          weatherData: null
      }

    render() {
        const zip = this.props.zip;
        const lang = 'zh_cn';
        const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
          zip +
          "&lang=" + lang + "&appid=e798d8a91519874ea95daee612e9a0cd&units=metric";
        fetch(URL).then(res => res.json()).then(json => {
          this.setState({ weatherData: json });
        });
        
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
          <div>
            <h1>
              {weather.main} in {weatherData.name}, {weatherData.sys.country}
              <img src={iconUrl} alt={weatherData.description} />
            </h1>
            <p>Current: {weatherData.main.temp}°</p>
            <p>High: {weatherData.main.temp_max}°</p>
            <p>Low: {weatherData.main.temp_min}°</p>
            <p>Wind Speed: {weatherData.wind.speed} km/hr</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
          </div>
    );
        
    }
}

export default WeatherDisplay;