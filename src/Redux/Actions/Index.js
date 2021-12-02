const baseURL = 'https://coinranking1.p.rapidapi.com/coins;'
// Action Types

export const REQUEST_CRYPTO = 'REQUEST_CRYPTO';
export const RECEIVED_CRYPTO = 'RECEIVED_CRYPTO';
export const HOME_DISMOUNT = 'HOME_DISMOUNT';

// Actions

const requestCrypto = () => ({ type: REQUEST_CRYPTO });
export const homePageDismount = () => ({ type: HOME_DISMOUNT });

const receivedCrypto = (coins) => ({
  type: RECEIVED_CRYPTO,
  coins,
});

export function fetchCrypto(endpoint) {
  return (dispatch) => {
    dispatch(requestCrypto());
    return fetch(`https://coinranking1.p.rapidapi.com${endpoint}`, {
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
    .catch(err => {
        console.error(err);
    });
  }
}