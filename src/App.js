import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Starting React</h1>
        <Button title='Find Flights' primary={true} />
        <Button title='Sign Up' />
        <Button title='Enter Competition' magic={true} />
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
