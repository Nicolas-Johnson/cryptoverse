const cryptoBaseURL = 'https://coinranking1.p.rapidapi.com';

// Action Types

export const REQUEST_CRYPTO = 'REQUEST_CRYPTO';
export const RECEIVED_CRYPTO = 'RECEIVED_CRYPTO';
export const HOME_DISMOUNT = 'HOME_DISMOUNT';
export const REQUEST_NEWS = 'REQUEST_NEWS';
export const RECEIVED_COIN = 'RECEIVED_COIN';
export const RECEIVED_HISTORY = 'RECEIVED_HISTORY';
export const RECEIVED_NEWS = 'RECEIVED_NEWS';

// Actions

const requestCrypto = () => ({ type: REQUEST_CRYPTO });
const requestNews = () => ({ type: REQUEST_NEWS });
export const homePageDismount = () => ({ type: HOME_DISMOUNT });

const receivedCrypto = (coins) => ({
  type: RECEIVED_CRYPTO,
  coins,
});

const receivedCoin = (coin) => ({
  type: RECEIVED_COIN,
  coin,
});

const receivedCoinHistory = (history) => ({
  type: RECEIVED_HISTORY,
  history,
});

const receivedNews = (news) => ({
  type: RECEIVED_NEWS,
  news,
});

export function fetchCrypto(endpoint) {
  return (dispatch) => {
    dispatch(requestCrypto());
    return fetch(cryptoBaseURL+endpoint, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": "328d5e08e5msh3379c9663d7b5d2p1bcd16jsn62cbd9f5ee6a"
        }
    })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(receivedCrypto(response));
    })
    .catch(err => console.error(err));
  }
}

export function fetchCoin(endpoint) {
  return (dispatch) => {
    dispatch(requestCrypto());
    return fetch(cryptoBaseURL+endpoint, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": "328d5e08e5msh3379c9663d7b5d2p1bcd16jsn62cbd9f5ee6a"
        }
    })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(receivedCoin(response));
    })
    .catch(err => console.error(err));
  }
}

export function fetchCoinHistory(coinId, timeP) {
  return (dispatch) => {
    dispatch(requestCrypto());
    return fetch(`${cryptoBaseURL}/coin/${coinId}/history/${timeP}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": "328d5e08e5msh3379c9663d7b5d2p1bcd16jsn62cbd9f5ee6a"
        }
    })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(receivedCoinHistory(response));
    })
    .catch(err => console.error(err));
  }
}

export function fetchNews(newsCategory, count) {
  return (dispatch) => {
    dispatch(requestNews());
    return fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`, {
      "method": "GET",
      "headers": {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "328d5e08e5msh3379c9663d7b5d2p1bcd16jsn62cbd9f5ee6a"
      }
    })
    .then((response) => response.json())
    .then((response) => {
      return dispatch(receivedNews(response));
    })
    .catch((err) => console.error(err));
  }
}