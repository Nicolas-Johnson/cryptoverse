import React from 'react'

const Cardstats = ({ title, value }) => {
  return (
    <div className="cryptoverse_main-content_homepage-cardscontainer-card">
      <h4>{ title }</h4>
      <p className="subT-1">{ value }</p>    
    </div>
  )
}

export default Cardstats
