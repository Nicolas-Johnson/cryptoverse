import React from 'react'
import moment from 'moment';

const CardCryptoNews = ({ name, contentUrl,  description, datePublished, provider }) => {
  const thumbDefault = "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
  return (
    <div className="cryptoverse_main-content_news-cards_card">
      <div className="cryptoverse_main-content_news-cards_card-header">
        <h4>{ name }</h4>
        <img src={ contentUrl?.thumbnail?.contentUrl ||  thumbDefault} alt="news" width="100px" />
      </div>
      <p>
        {description.length > 100 ? `${description.substring(0, 100)}...` : description}
      </p>
      <div className="cryptoverse_main-content_news-cards_card-footer">
        <div>
          <img src={provider?.image?.thumbnail?.contentUrl || thumbDefault} alt="Publisher" width="20px" />
          <p>{ provider?.name }</p>
        </div>
        <p>{moment(datePublished).startOf('ss').fromNow()}</p>
      </div>
    </div>
  )
}

export default CardCryptoNews
