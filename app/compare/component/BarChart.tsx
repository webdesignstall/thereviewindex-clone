'use client'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

const BarChart: React.FC = () => {
  const data: ChartData = {
    labels: ['Clarity', 'Display', 'Price', 'Reliability', 'Color', 'MarketPlace', 'Size', 'Usage', 'Screen', 'Usage/Gaming', 'Build Quality', 'Design'], // X-axis labels
    datasets: [
      {
        label: 'Product Ratings', // Data series label
        data: [15000, 18000, 14000, 12000, 16000, 13000, 19000, 17000, 20000, 15000, 18000, 17000], // Data points for the bar chart (in thousands)
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color (light)
        borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
        borderWidth: 1, // Bar border width
      },
    ],
  };

  const options:any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Feature Ratings (0k - 20k)',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Features',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rating (in $)',
        },
        ticks: {
          callback: function (value: number) {
            return `$${value / 1000}k`; // Format y-axis labels as "0k", "1k", etc.
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
