import React from 'react'
import millify from 'millify';

const CryptoCard = ({ rank, name, iconUrl, price, marketCap, change }) => {
  return (
    <div className="cryptoverse_main-content_cryptocurrencies-container-card">
      <div className="cryptoverse_main-content_cryptocurrencies-container-card-header">
        <h2>{ rank }</h2>
        <h2>{ name }</h2>
        <img width="50px" src={ iconUrl } alt="Crypto Flag" />
      </div>
      <div className="cryptoverse_main-content_cryptocurrencies-container-card-infos">
        <p>Price: {millify(price)}</p>
        <p>Market Cap: {millify(marketCap)}</p>
        <p>Daily Change {millify(change)}</p>
      </div>    
    </div>
  )
}

export default CryptoCard;
