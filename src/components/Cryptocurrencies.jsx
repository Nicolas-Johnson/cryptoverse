import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CryptoCard } from '.';

const Cryptocurrencies = ({simplify = false}) => {
  const isFetcthing = useSelector((state) => state.crypto.isFetcthing);
  const coins = useSelector((state) => state.crypto.coins);
  const [currencies] = useState(simplify ? coins.slice(0, 10): coins)
  return (
    <div className="cryptoverse_main-content_cryptocurrencies">
      {!simplify && <h2>Alguma coisa aqui da pagina</h2>}
      <div className="cryptoverse_main-content_cryptocurrencies-container">
        {isFetcthing && <p>Loading...</p>}
        {coins && currencies.map(({ id, rank, name, iconUrl, price, marketCap, change }) => (
          <Link to={`crypto/${id}`} key={ id }>
            <CryptoCard rank={ rank } name={ name } iconUrl={ iconUrl } price={ price } marketCap={ marketCap } change={ change } />
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default Cryptocurrencies;
