'use client'
import React from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ReviewVolumeChart: React.FC = () => {


  const chartOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: 480,
    },
    title: {
      useHTML: true,
      text: '<p class="text-neutral-700 dark:text-neutral-50">Review Stars Split Count</p>',
      align: 'left',
    },
    xAxis: {
      labels: {
        style: {
          color: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#ffffff' : '#333333',
        },
        // @ts-ignore
        formatter: function () {
          // @ts-ignore
          return this.value; // This will render the label value
        }
      },
    },

    yAxis: {
      min: 0,
      max: 5000,
      title: {
        text: undefined,
      },
      labels: {
        style: {
          color: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#ffffff' : '#333333',
        },
        // @ts-ignore
        formatter: function () {
          // @ts-ignore
          return this.value; // This will render the label value
        }
      },
      gridLineWidth: 0,
    },

    legend: {
      enabled: true,
      layout: 'vertical', // Vertical layout for better space distribution
      align: 'right',
      verticalAlign: 'middle',
      floating: false,
      // @ts-ignore
      labelFormatter: function () {
        // Check if dark mode is active
        const isDarkMode = document.documentElement.classList.contains('dark');
        const color = isDarkMode ? '#ffffff' : '#333333'; // Light or dark color

        // Return the label with the appropriate color
        // @ts-ignore
        return `<span style="color: ${color};">${this.name}</span>`;
      },
    },

    credits: {
      enabled: false  // Disable the Highcharts credits (remove "highcharts.com" text)
    },

    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.30,
        groupPadding: 0.02,
        stacking: 'normal',
        dataLabels: {
          enabled: false,
        },
        borderWidth: 0,  // Ensure no border width
        borderColor: 'transparent',  // Ensure no border color
      },
    },
    series: [
      {
        name: 'One Star Review',
        data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 50, 0, 66, 44,], // Random data
        color: 'rgb(84, 190, 238)',
        cursor: 'pointer',
        borderRadius: 'none',
      },
      {
        name: 'Two Star Review',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 266, 0, 70, 80], // Random data
        color: 'rgb(172, 86, 174)',
        cursor: 'pointer',
        borderRadius: 'none',
      },
      {
        name: 'Three Star Review',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 70, 300, 144, 30, 120, 99], // Random data
        color: 'rgb(255, 205, 52)',
        cursor: 'pointer',
        borderRadius: 'none',
      },
      {
        name: 'Five Star Review',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 50, 150, 200, 350, 166, 50, 130, 100], // Random data
        color: 'rgb(232, 131, 58)',
        cursor: 'pointer',
        borderRadius: 'none',
      },
      {
        name: 'Six Star Review',
        data: [0, 0, 0, 0, 0, 0, 40, 60, 0, 0, 0, 0, 0, 0, 0, 0], // Random data
        color: 'rgb(101, 112, 124)',
        cursor: 'pointer',
        borderRadius: 'none',
      },
      {
        name: 'Four Star Review',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 800, 1500, 2400, 900, 1400, 2200, 2500, 1000, ], // Random data
        color: 'rgb(20, 203, 196)',
        cursor: 'pointer',
        borderRadius: 'none',
      },


    ],
  };


  return (
      <div className='border'>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
  );
};

// @ts-ignore
export default ReviewVolumeChart;
