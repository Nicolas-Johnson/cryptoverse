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
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
        fill: false,
      },
    ],
  }
  
  return (
    <div>
    <h2>{ coinName } Price Chart</h2>
    <div>
      <h5>{ coinHistory && coinHistory.change } %</h5>
      <h5>Current { coinName } Price: $ { currentPrice }</h5>
    </div>
    <Line datasetIdKey='id' data={data} />
    </div>
  )
}

export default LineChart
