import React from 'react'

const Cardstats = ({ title, value }) => {
  return (
    <div className="cryptoverse_main-content_homepage-cardscontainer-card">
      <h3>{ title }</h3>
      <p>{ value }</p>    
    </div>
  )
}

export default Cardstats
