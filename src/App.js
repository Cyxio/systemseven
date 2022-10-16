import React, { useState } from 'react';
import syselogo from './syselogo.jpg';
import './App.css';

const App = () => {
  const [showList, setShowList] = useState(false);
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
          <p>The signup for the event has ended.</p>
        </div>
        <button class="button-80" onClick={() => setShowList(!showList)}>Signup list</button>
        {showList && 
        <div className='listContainer'>
          <ul className='signup-list'>
            <li><b>Valtteri</b></li>
            <li>Joonatan</li>
            <li>Hemmo</li>
            <li>Aaro</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Denis</b></li>
            <li>Teemu</li>
            <li>Pauli</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Topias</b></li>
            <li>Sampo</li>
            <li>Granit</li>
            <li>Abdirauf</li>
            <li>Miikkael</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Patricia</b></li>
            <li>Lilja</li>
            <li>Inka</li>
            <li>Ida</li>
            <li>Basant</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Ilmari</b></li>
            <li>Aaron</li>
            <li>Lassi</li>
            <li>Anton</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Lauri</b></li>
            <li>Nuutti</li>
            <li>Aaro</li>
            <li>Henrik</li>
            <li>Joel</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Markus</b></li>
            <li>Kasper</li>
            <li>Eetu</li>
            <li>Onni</li>
            <li>Siiri</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Arto</b></li>
            <li>Jatuli</li>
            <li>Ernesti</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Leevi</b></li>
            <li>William</li>
            <li>Marek</li>
            <li>Pietro</li>
            <li>Marcos</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Noora</b></li>
            <li>Helmi</li>
            <li>Maj</li>
            <li>Julia</li>
            <li>Alina</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Shavit</b></li>
            <li>Timi</li>
            <li>Camilla</li>
            <li>Pekko</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Anna</b></li>
            <li>Sneha</li>
            <li>Eero</li>
            <li>Tilda</li>
            <li>Joona</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Otto</b></li>
            <li>Antti</li>
            <li>Milla</li>
            <li>Luka</li>
            <li>Iiro</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Olli</b></li>
            <li>Severi</li>
            <li>Aaro</li>
            <li>Atte</li>
            <li>Niko</li>
          </ul>
          <ul className='signup-list'>
            <li><b>Leevi</b></li>
            <li>Mitja</li>
            <li>Imran</li>
            <li>Aleksi</li>
            <li>Arttu</li>
          </ul>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
