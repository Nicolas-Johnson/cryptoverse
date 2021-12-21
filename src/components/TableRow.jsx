import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';

const TableRow = ({ rank, iconUrl, name, volume, numberOfM, marketShare, description }) => {
  const [colapse, setColapse] = useState(false);
  return (
    <div onClick={ () => setColapse(!colapse) }>
      <div>
        <p>{ rank } <img width="50px" src={ iconUrl } alt="logo" /> { name }</p>
        <p>{ millify(numberOfM) }</p>
        <p>{ millify(marketShare) }</p>
        <p>{ millify(volume) }</p>
      </div>
      {colapse && HTMLReactParser(description || '')} 
    </div>
  )
}

export default TableRow

