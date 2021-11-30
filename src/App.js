import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';

function App() {
  return (
    <div className="cryptoverse">
      <div className="cryptoverse_navBar">
        <NavBar />
      </div>
      <div className="cryptoverse_main">

      </div>
      <div className="cryptoverse_footer">

      </div>
    </div>
  );
}

export default App;
