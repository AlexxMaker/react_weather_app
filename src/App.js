import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import WeatherDisplay from './WeatherDisplay/WeatherDisplay'
import { NavItem, Nav, Grid, Row, Col } from "react-bootstrap";



class App extends Component {
  state = {
    places: [
      { name: "Kyiv", zip: "703448" },
      { name: "Dnipro", zip: "709930" },
      { name: "Kharkiv", zip: "706483" },
      { name: "Kherson", zip: "706448" },
      { name: "London", zip: "2643743"},
      { name: "New York", zip: "5128638" }
    ],
    activePlace: 0
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
            <Grid>

            <Header />
            
            <Row>
                <Col md={4} sm={4} className="nav-col">
                  <h3>Select a city</h3>
                  <Nav
                    bsStyle="pills"
                    stacked
                    activeKey={activePlace}
                    onSelect={index => {
                      this.setState({ activePlace: index });
                    }}
                  >
                    {this.state.places.map((place, index) => (
                      <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                    ))}
                  </Nav>
                </Col>
                <Col md={8} sm={8} className="display-col">
                  <WeatherDisplay key={activePlace} zip={this.state.places[activePlace].zip} />
                </Col>
              </Row>
            </Grid>
      </div>
  )}
}

export default App;
