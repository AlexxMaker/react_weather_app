import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay'


class App extends Component {
  state = {
    places: [
      { name: "Kyiv", zip: "703448" },
      { name: "Dnipro", zip: "709930" },
      { name: "Kharkiv", zip: "706483" },
      { name: "Kherson", zip: "706448" }
    ],
    activePlace: 0
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <WeatherDisplay zip={this.state.places[activePlace].zip}/>

        {
          this.state.places.map((place, index) => {
            return (
              <button 
              key={index}
              onClick={() => this.setState({activePlace: index})}>
              {place.name}
              </button>
            )
          })
        }
      </div>
  )}
}

export default App;
