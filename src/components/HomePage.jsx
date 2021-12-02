import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCrypto, homePageDismount } from '../Redux/Actions/Index';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Cardstats } from '.';

const HomePage = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.crypto.stats);
  const isFetcthing = useSelector((state) => state.crypto.isFetcthing);
  const canRender = useSelector((state) => state.crypto.canRender);

  useEffect(() => {
    dispatch(fetchCrypto('/coins'));
  }, []);

  useEffect(() => {
    return () => dispatch(homePageDismount());
  }, []);

  return (
    <div className="cryptoverse_main-content_homepage">
      <h2>Global Crypto Stats</h2>
      {isFetcthing && <p>Loading...</p>}
      {canRender && <div className="cryptoverse_main-content_homepage-cardscontainer">
        <Cardstats title="Total Cryptocurrencies" value={stats.total} />
        <Cardstats title="Total Exchanges" value={millify(stats.totalExchanges)} />
        <Cardstats title="Total Market Cap" value={millify(stats.totalMarketCap)} />
        <Cardstats title="Total 24h Volume" value={millify(stats.total24hVolume)} />
        <Cardstats title="Total Markets" value={millify(stats.totalMarkets)} />
      </div>}
      <div className="cryptoverse_main-content_homepage-headings">
        <h2>Top 10 Cryptocurrencies in the world</h2>
        <h3><Link to="cryptocurrencies">Show more</Link></h3>
      </div>
    </div>
  );
}

export default HomePage;
