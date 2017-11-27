import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Emoji from './components/Emoji'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Starting React</h1>

        <Emoji />
        <Emoji cat />
        <Emoji emotion='sad' />
        <Emoji cat emotion='sad' />
        <Emoji emotion='love' />
        <Emoji cat emotion='love' />

        <br />

        <Button title='Find Flights' primary />
        <Button title='Sign Up' />
        <Button title='Enter Competition' magic />
        <p>Learning how to use react.js</p>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </div>
    );
  }
}

export default App;
