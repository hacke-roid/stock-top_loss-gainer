import React from 'react'
import './StockDisplay.css'

const StockDisplay = ({data, searchTerm}) => {
  return (
    <div className="stock-container">
         <h1>Current Search: {searchTerm}</h1>


        {data ? (
        
        <div key={data.ticker} >
          <h2>{data.ticker}</h2>
          <p>Price: ${data.price}</p>
          <p>Exchange: {data.exchange}</p>
        </div>
      ) : (
        <p>No stock data available.</p>
      )
    }
    </div>
  )
}

export default StockDisplay
