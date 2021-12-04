import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CryptoCard } from '.';

const Cryptocurrencies = ({simplify = false}) => {
  const isFetcthing = useSelector((state) => state.crypto.isFetcthing);
  const coins = useSelector((state) => simplify ? state.crypto.coins.slice(0, 10) : state.crypto.coins);
  const [currencies, setCurrencies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filteredData = coins.filter((coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setCurrencies(filteredData);

  }, [searchQuery]);

  return (
    <div className="cryptoverse_main-content_cryptocurrencies">
      {!simplify && <div className="cryptoverse_main-content_cryptocurrencies-search">
        <input placeholder="Search Cryptocurrency" onChange={(e) => setSearchQuery(e.target.value)} />
      </div>}
      <div className="cryptoverse_main-content_cryptocurrencies-container">
        {isFetcthing && <p>Loading...</p>}
        {currencies.map(({ id, rank, name, iconUrl, price, marketCap, change }) => (
          <Link to={`crypto/${id}`} key={ id }>
            <CryptoCard rank={ rank } name={ name } iconUrl={ iconUrl } price={ price } marketCap={ marketCap } change={ change } />
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default Cryptocurrencies;
