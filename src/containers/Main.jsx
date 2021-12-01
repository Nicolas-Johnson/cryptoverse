import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Exchanges, HomePage, Cryptocurrencies, CryptoDetails, News, NotFound } from '../components';

const Main = () => {
  return (
    <div className="cryptoverse_main">
      <div className="cryptoverse_main-content">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="exchanges" element={<Exchanges />}></Route>
          <Route exact path="cryptocurrencies" element={<Cryptocurrencies />}></Route>
          <Route path="crypto/:coinId" element={<CryptoDetails />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Main
