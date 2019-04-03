import React, { Component } from 'react';
import './App.css';
import Street from '../Street/Street';
import House from '../House/House';

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
                <House imageUrl={house.imageUrl} key={indx} />
              )) : ''
            }
          </div>
        </div>
    );
  }
}

export default App;
