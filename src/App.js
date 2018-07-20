import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay'


class App extends Component {
  state = {
    places: [
      { name: "Palo Alto", zip: "94303" },
      { name: "San Jose", zip: "94088" },
      { name: "Santa Cruz", zip: "95062" },
      { name: "Honolulu", zip: "96803" }
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
