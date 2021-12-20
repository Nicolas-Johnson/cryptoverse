import React from 'react'
import { Link } from 'react-router-dom';

import Icon from '../images/cryptocurrency.png';
const NavBar = () => {
  return (
    <div className="cryptoverse_header_navgation">
      <div className="cryptoverse_header_navgation-logo">
        <img src={ Icon } alt="Logo" />
        <Link to="/">CRYPTOVERSE</Link>
      </div>
      <div className="cryptoverse_header_navgation-menu">
        <ul className="cryptoverse_header_navgation-menu-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="cryptocurrencies">Cryptocurrencies</Link></li>
          <li><Link to="exchanges">Exchanges</Link></li>
          <li><Link to="news">News</Link>  </li>
        </ul>
      </div>        
    </div>
  )
}

export default NavBar
