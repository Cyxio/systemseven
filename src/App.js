import React, { Component } from 'react';
import syselogo from './syselogo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={syselogo} className="App-logo" alt="logo" />
          <p>
            System Seven invites you to:
          </p>
          <h1>
            JOIN THE MACHINE
          </h1>
          <p className='info'>
            Join the Machine will be held at Jämeräntaival 4, 18:00 - 22:00 Thursday 20.10.
          </p>
          <p className='details'>
            This event will confirm your interest in our organization, and set you on the path of productivity towards a 
            more meaningful future.
          </p>
          <div className='signup'>
            <p>Signup will open 7.10</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
