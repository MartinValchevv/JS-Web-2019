import React, { Component } from 'react';
import './App.css';
import Street from '../Street/Street';
import House from '../House/House';
import HouseDetails from '../HouseDetails/HouseDetails';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseIdx: 0,
      hasFetched: false
    }
  }
  componentWillMount() {
    fetch('http://localhost:9999/feed/street/all')
      .then(rawData => rawData.json())
      .then(data => {
        this.setState({
          streets: data.streets,
          hasFetched: true
        })
      })
  }

  getStreets() {
    return this.state.streets
  }

  getSelectedStreetHouses() {
    if (this.state.hasFetched) {
      return this.state.streets[this.state.selectedStreetIdx].homes
    }
    return []
  }

  setCurrentStreet(idx) {
    this.setState({
       selectedStreetIdx: idx
    })
  }

  setCurrentHouse(idx) {
    this.setState({
       selectedHouseIdx: idx
    })
  }

  render() {
    return (
      <div className="App">
          <div className="streets">
            <h2>Streets</h2>
            {
              this.getStreets().map((street, idx) => (
                <Street selectStreet={(e) => this.setCurrentStreet(idx, e)} location={street.location} key={idx} id={idx} />
              ))
            }
          </div>
          <div className="houses">
          <h2>Houses</h2>
            {
              this.getSelectedStreetHouses() ? this.getSelectedStreetHouses().map((house, indx) => (
                <House selectHouse={(e) => this.setCurrentHouse(indx, e)} imageUrl={house.imageUrl} key={indx} id={indx} />
              )) : ''
            }
          </div>
          {this.state.hasFetched ? (<HouseDetails house={this.getSelectedStreetHouses()[this.state.selectedHouseIdx]} />) : ''}
        </div>
    );
  }
}

export default App;


