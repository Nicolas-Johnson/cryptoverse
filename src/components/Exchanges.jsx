import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableRow } from '.';
import { fetchExchanges } from '../Redux/Actions/Index';

const Exchanges = () => {
  const [colapse, setColapse] = useState(false);
  const dispatch = useDispatch();
  const isFetcthing = useSelector((state) => state.crypto.isFetcthing);
  const exchanges = useSelector((state) => state.crypto.exchanges);

  useEffect(() => {
    dispatch(fetchExchanges());
  }, [])

  if (isFetcthing) return <p>Loading...</p>
  
  return (
    <div className="cryptoverse_main-content_exchanges">
      <div className="headers">
        <p className="subT-1">Exchanges</p>
        <p className="subT-1">24h Trade Volume</p>
        <p className="subT-1">Markets</p>
        <p className="subT-1">Change</p>
      </div>
      <div>
      {exchanges[0] && exchanges.map(({ rank, iconUrl, name, volume, numberOfMarkets, marketShare, description }) => <TableRow key={ name + rank } rank={ rank } iconUrl={ iconUrl } name={ name } volume={ volume } numberOfM={ numberOfMarkets } marketShare={ marketShare } description={ description } />)}
      </div>
    </div>
  )
}

export default Exchanges;
