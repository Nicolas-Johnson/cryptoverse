import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';

const LineChart = ({ coinHistory, currentPrice, coinName}) => {
  const coinPrice = coinHistory && coinHistory.history.map((coin) => coin.price);
  const coinTimeStamp = coinHistory && coinHistory.history.map((coin) => new Date(coin.timestamp).toLocaleDateString());

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        id: 1,
        label: 'Price in USD',
        data: coinPrice,
        backgroundColor: '#8ba000',
        borderColor: '#8ba000',
        fill: false,
      },
    ],
  }
  
  return (
    <div>
    <h3>{ coinName } Price Chart</h3>
    <div className="jstcontainer">
      <h5 className="subT-1">{ coinHistory && coinHistory.change } %</h5>
      <h5 className="subT-1">Current { coinName } Price: $ { currentPrice }</h5>
    </div>
    <Line datasetIdKey='id' data={data} />
    </div>
  )
}

export default LineChart
