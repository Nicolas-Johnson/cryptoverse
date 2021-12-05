import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCoin, fetchCoinHistory } from '../Redux/Actions/Index';
import { useDispatch, useSelector } from 'react-redux';
import millify from 'millify';
import { AiOutlineDollar, AiOutlineStop, AiOutlineFieldNumber, AiOutlineThunderbolt, AiOutlineTrophy, AiOutlineFund, AiOutlineCheck, AiOutlineMoneyCollect, AiOutlineExclamationCircle } from "react-icons/ai";
import HTMLReactParser from 'html-react-parser';
import { LineChart } from '.';

const CryptoDetails = () => {
  const dispatch = useDispatch();
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const isFetcthing = useSelector((state) => state.crypto.isFetcthing);
  const coin = useSelector((state) => state.crypto.coin);
  const coinHistory = useSelector((state) => state.crypto.history);

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  let stats = [];
  let genericStats = [];
  if (coin) {
    stats = [
      { title: 'Price to USD', value: `$ ${coin.price && millify(coin.price)}`, icon: <AiOutlineDollar /> },
      { title: 'Rank', value: coin.rank, icon: <AiOutlineFieldNumber /> },
      { title: '24h Volume', value: `$ ${coin.volume && millify(coin.volume)}`, icon: <AiOutlineThunderbolt /> },
      { title: 'Market Cap', value: `$ ${coin.marketCap && millify(coin.marketCap)}`, icon: <AiOutlineDollar /> },
      { title: 'All-time-high(daily avg.)', value: `$ ${millify(coin.allTimeHigh.price)}`, icon: <AiOutlineTrophy /> },
    ];
    genericStats = [
      { title: 'Number Of Markets', value: coin.numberOfMarkets, icon: <AiOutlineFund /> },
      { title: 'Number Of Exchanges', value: coin.numberOfExchanges, icon: <AiOutlineMoneyCollect /> },
      { title: 'Aprroved Supply', value: coin.approvedSupply ? <AiOutlineCheck /> : <AiOutlineStop />, icon: <AiOutlineExclamationCircle /> },
      { title: 'Total Supply', value: `$ ${millify(coin.totalSupply)}`, icon: <AiOutlineExclamationCircle /> },
      { title: 'Circulating Supply', value: `$ ${millify(coin.circulatingSupply)}`, icon: <AiOutlineExclamationCircle /> },
    ];
  }




  useEffect(() => {
    dispatch(fetchCoin(`/coin/${coinId}`));
    dispatch(fetchCoinHistory(coinId, timePeriod));
  }, [timePeriod]);
  if (isFetcthing) return <p>Loading...</p>
  return (
    <div className="cryptoverse_main-content_cryptodetails">
     <div className="cryptoverse_main-content_cryptodetails-headers">
       <h2>{coin?.name} ({coin?.slug}) Price</h2>
       <p>{ coin?.name } Live price in us dollars. View value statistics, market cap and supply.</p>
     </div>
     <form>
       <label>
         <select placeholder="Select Time Period." defaultValue={ timePeriod } onChange={(e) => setTimePeriod(e.target.value)}>
           {time.map((date) => (<option key={ date }>{ date }</option>))}
         </select>
       </label>
     </form>
     <LineChart coinHistory={ coinHistory } currentPrice={coin ? millify(coin.price) : ''} coinName={ coin?.name } />
     <div className="cryptoverse_main-content_cryptodetails-stats">
      <div className="cryptoverse_main-content_cryptodetails-stats-statistics">
        <div className="cryptoverse_main-content_cryptodetails-stats-statistics-headings">
          <h3>{ coin?.name } Value Statistics.</h3>
          <p>An overview showing the stats of { coin?.name }</p>
        </div>
        {stats.map(({ title, icon, value }) => (
          <div key={ title } lassName="cryptoverse_main-content_cryptodetails-stats-statistics-names">
              <div><p>{ icon } { title }</p></div>
              <p>{ value }</p>
          </div>
        ))}
        <div className="cryptoverse_main-content_cryptodetails-stats-otherstatistics-headings">
          <h3>Other Statistics.</h3>
          <p>An overview showing the stats of all Cryptocurrencies</p>
        </div>
        {genericStats.map(({ title, icon, value }) => (
          <div lassName="cryptoverse_main-content_cryptodetails-stats-otherstatistics-names">
              <div><p>{ icon } { title }</p></div>
              <p>{ value }</p>
          </div>
        ))}
      </div>
     </div>
     <div className="cryptoverse_main-content_cryptodetails-descrption_links">
       <div className="cryptoverse_main-content_cryptodetails-descrption_links-desc">
         <h3 className="top_h">What is { coin?.name }</h3>
         {coin && HTMLReactParser(coin?.description)}
       </div>
       <div className="cryptoverse_main-content_cryptodetails-descrption_links-links">
         <h3>{ coin?.name} Links</h3>
         {coin?.links?.map((link) => (
           <div key={ link.name }>
            <h5>{ link.type }</h5>
            <a href={ link.url } target="_blank" rel="noreferrer">{ link.name }</a>
           </div>
         ))}
       </div>
     </div>
    </div>
  )
}

export default CryptoDetails;
