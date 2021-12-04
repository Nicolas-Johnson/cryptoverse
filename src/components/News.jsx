import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../Redux/Actions/Index';

const News = ({simplify = false}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews('Cryptocurrency', simplify ? 10 : 100));
  }, []);
  return (
    <div className="cryptoverse_main-content_news">
      <h1>News</h1>
    </div>
  )
}

export default News;
