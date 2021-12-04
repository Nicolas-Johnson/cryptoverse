import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardCryptoNews } from '.';
import { fetchNews } from '../Redux/Actions/Index';

const News = ({simplify = false}) => {
  const dispatch = useDispatch();
  const [newsCategoriy, setCategory] = useState('Cryptocurrency')
  const news = useSelector((state) => state.news.news);
  const coins = useSelector((state) => state.crypto.coins);
  useEffect(() => {
    dispatch(fetchNews(newsCategoriy, simplify ? 6 : 20));
  }, [newsCategoriy]);

  return (
    <div className="cryptoverse_main-content_news">
      <div className="cryptoverse_main-content_news-query">
        {!simplify &&        
        <select
          placeholder="Select a Crypto"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Cryptocurrenci">Cryptocurrenci</option>
          {coins && coins.map(({name}) => <option key={ name } value={ name }>{ name }</option> )}
        </select>}
      </div>
      <div className="cryptoverse_main-content_news-cards">
        {news && news.map(({url, name, image, description, datePublished , provider}) => (
          <a key={url} href={ url } target="_blank" rel="noreferrer">
           <CardCryptoNews name={name} datePublished={ datePublished } provider={ provider[0] } contentUrl={ image } description={ description } />
          </a>
        ))}

      </div>
    </div>
  )
}

export default News;
