import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

import ReservationsList from './components/reservations/ReservationsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      numReservations: 0,
    }
  }
  componentDidMount() {
    fetch('/reservations')
      .then(res => res.json())
      .then(reservations =>
        this.setState({ reservations: reservations, numReservations: reservations.length }
        ));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header numReservations={this.state.numReservations}/>
        </div>
        <div className="reservation-list box">
          <ReservationsList reservations={this.state.reservations}/>
        </div>
      </div>
    );
  }
}

export default App;
