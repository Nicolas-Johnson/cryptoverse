import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';

const TableRow = ({ rank, iconUrl, name, volume, numberOfM, marketShare, description }) => {
  const [colapse, setColapse] = useState(false);
  return (
    <div onClick={ () => setColapse(!colapse) } className="cryptoverse_main-content_exchanges-container_card">
      <div className="cryptoverse_main-content_exchanges-container_card-status">
        <p><span>{ rank }</span> <span><img width="50px" src={ iconUrl } alt="logo" /></span> <span>{ name }</span></p>
        <p>{ millify(numberOfM) }</p>
        <p>{ millify(marketShare) }</p>
        <p>{ millify(volume) }</p>
      </div>
      <div className="cryptoverse_main-content_exchanges-container_card-description">
        {colapse && HTMLReactParser(description || '')}
      </div>
    </div>
  )
}

export default TableRow

