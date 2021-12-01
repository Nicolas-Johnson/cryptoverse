import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="cryptoverse_footer">
      <p>© 2021 Crypyoverse | All rights reserved</p>
      <div className="cryptoverse_footer-navigation">
        <ul className="cryptoverse_header_navgation-menu-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="exchanges">Exchanges</Link></li>
          <li><Link to="news">News</Link>  </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
