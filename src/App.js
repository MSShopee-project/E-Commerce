import logo from "./logo.svg";
import "./App.css";
import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Project</li>
          <li>Hospitality</li>
        </ul>
      </nav>
      <Navbar/>
    </div>
  );
}

export default App;
