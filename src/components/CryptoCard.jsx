import React from 'react'
import millify from 'millify';

const CryptoCard = ({ rank, name, iconUrl, price, marketCap, change }) => {
  return (
    <div className="cryptoverse_main-content_cryptocurrencies-container-card">
      <div className="cryptoverse_main-content_cryptocurrencies-container-card-header">
        <h6>{ rank }.</h6>
        <p className="subT-1">{ name }</p>
        <img width="50px" src={ iconUrl } alt="Crypto Flag" />
      </div>
      <div className="cryptoverse_main-content_cryptocurrencies-container-card-infos">
        <p>Price: <span>{millify(price)}</span></p>
        <p>Market Cap: <span>{millify(marketCap)}</span></p>
        <p>Daily Change <span>{millify(change)}</span></p>
      </div>    
    </div>
  )
}

export default CryptoCard;
