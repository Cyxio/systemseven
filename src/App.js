import React, { Component } from 'react';
import syselogo from './syselogo.jpg';
import './App.css';

class App extends Component {
  render() {
    const signupStart = new Date('October 13, 2022 00:00:00');
    const signupEnd = new Date('October 14, 2022 23:59:00');
    const datenow = new Date();
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
          {(datenow < signupEnd && datenow > signupStart) ? 
          <div className='g-form-container'>
            <iframe className="responsive-iframe" title="SignupForms" src="https://docs.google.com/forms/d/e/1FAIpQLSdLTMSK-Ei71-4pvHkFiG-rJLAIXkDGQzp2wD1evRWDj03T6Q/viewform?embedded=true" width="100%" height="fit-content" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
          </div>
          :
          <div className='signup'>
            <p>Participants are required to apply as a group of 5</p>
            <p>Applications for the event are accepted during 13th and 14th of October</p>
            <p>Results will be posted by the 16th</p>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
