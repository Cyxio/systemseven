import React from 'react';
import syselogo from './syselogo.jpg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={syselogo} className="App-logo" alt="logo" />
        <video width="1280" height="720" controls>
          <source src="thesystemseven.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}

export default App;
