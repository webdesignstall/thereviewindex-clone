// components/SentimentChart.js
'use client'
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Function to generate sentiment data
const generateSentimentData = () => {
  const sentimentData = [];
  for (let i = 800; i <= 1800; i += 100) { // Sentiment values range from 800 to 1800
    const dataPoint = {
      sentiment: i,
      value: Math.floor(Math.random() * (95 - 60 + 1)) + 60, // Random values between 60 and 95
    };
    sentimentData.push(dataPoint);
  }
  return sentimentData;
};

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Generating chart data
const sentimentData = generateSentimentData();
const sentimentValues = sentimentData.map((data) => data.sentiment);
const chartValues = sentimentData.map((data) => data.value);

const data = {
  datasets: [
    {
      label: 'Sentiment Value',
      data: sentimentData.map((data) => ({ x: data.sentiment, y: data.value })),
      backgroundColor: sentimentData.map(() => getRandomColor()), // Random color for each dot
      pointRadius: 8,  // Adjust the size of the dot
      showLine: false, // Remove the line connecting the dots
    },
  ],
};

// Options for the chart
const options = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Sentiment Value (800-1800)',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Data Value (60-95)',
      },
      grid: {
        display: true, // Enable grid lines for the y-axis
        color: 'gray', // Customize grid line color
      },
    },
  },
};

const SentimentChart = () => {
  return (
    <div style={{ width: '80%', margin: '0 auto', paddingTop: '50px' }}>
      <h2 style={{ textAlign: 'center' }}>Sentiment Value Chart (Dots with Different Colors)</h2>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default SentimentChart;
