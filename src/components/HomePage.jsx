import React from 'react';
import millify from 'millify';
import { link } from 'react-router-dom';
import { Cardstats } from '.';

const HomePage = () => {
  return (
    <div className="cryptoverse_main-content_homepage">
      <h2>Global Crypto Stats</h2>
      <div className="cryptoverse_main-content_homepage-cardscontainer">
        <Cardstats title="Total Cryptocurrencies" value="5"/>
        <Cardstats title="Total Exchanges" value="5"/>
        <Cardstats title="Total Market Cap" value="5"/>
        <Cardstats title="Total 24h Volume" value="5"/>
        <Cardstats title="Total Markets" value="5"/>
      </div>
    </div>
  )
}

export default HomePage;
