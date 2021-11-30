import React from 'react'
import { Link } from 'react-router-dom';

import Icon from '../images/cryptocurrency.png';
const NavBar = () => {
  return (
    <div className="cryptoverse_nav-container">
      <div className="cryptoverse_nav-container_logo">
        <img src={ Icon } alt="Logo" />
        <Link to="/">CRYPTO VERSE</Link>
      </div>
      <div className="cryptoverse_nav-container-menu">
        <Link to="/">Home</Link>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>        
      </div>        
    </div>
  )
}

export default NavBar
