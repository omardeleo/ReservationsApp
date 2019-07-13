import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReservationsList from './components/reservations/ReservationsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ReservationsList />
        </div>
      </div>
    );
  }
}

export default App;
