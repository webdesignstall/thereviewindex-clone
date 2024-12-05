'use client'
import React, {useEffect, useState} from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ReviewVolumeChart: React.FC = () => {

  const chartOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: 480
    },
    title: {
      useHTML: true,
      text: '<p class="text-neutral-700 dark:text-neutral-50">Review Volume Trend</p>',
      align: 'left',
    },
    xAxis: {
      categories: [
        '2006', '2008', '2010', '2012', '2014',
        '2016', '2018', '2020', '2022', '2024'
      ],
      labels: {
        useHTML: true, // Enables HTML rendering
        // @ts-ignore
        formatter: function () {
          // @ts-ignore
          return `<span class="dark:text-neutral-50 text-black">${this.value}</span>`;
        },
      },
    },
    yAxis: {
      min: 0,
      max: 5000,
      title: {
        text: undefined,
        style: {
          color: '#000000', // White text for dark mode
        }
      },
      labels: {
        useHTML: true, // Enable HTML rendering
        // @ts-ignore
        formatter: function () {
          // Check if dark mode is active
          const isDarkMode = document.documentElement.classList.contains('dark');
          const color = isDarkMode ? '#ffffff' : '#333333'; // Light or dark color
          // @ts-ignore
          return `<span style="color: ${color};">${this.value}</span>`;
        },
      },
      gridLineWidth: 0
    },

    legend: {
      enabled: true,
      align: 'leftBottom',
      verticalAlign: 'bottom',
      horizontalAlign: 'bottom',
      itemStyle: {
        // Remove the useHTML and formatter from here
        // The formatter will go inside the labelFormatter
      },
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
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.30, // Controls padding between columns
        groupPadding: 0.02, // Controls padding between column groups
        stacking: 'normal',
        dataLabels: {
          enabled: false
        },
        borderWidth: 0,  // Ensure no border width
        borderColor: 'transparent',  // Ensure no border color
      }
    },
    series: [
      {
        name: 'Dell E2414HM 24" Screen LED-Lit Monitor - Amazon US',
        data: [0, 0, 0, 0, 1500, 2500, 700, 3200, 600, 400, 200, 450, 800, 900],
        color: 'rgb(84, 190, 238)',
        cursor: 'pointer',
        borderRadius: 'none',
        border: undefined
      },
      {
        name: 'Dell UltraSharp U2412M 24-Inch Screen LED-Lit Monitor, Black - Amazon US',
        data: [0, 0, 0, 200, 1200, 2000, 400, 2700, 300, 300, 200, 450, 800, 900],
        color: 'rgb(172, 86, 174)',
        cursor: 'pointer',
        borderRadius: 'none'
      },
      {
        name: 'Dell Gaming S2716DGR 27.0" QHD Wide 1440p Screen LED-Lit Monitor with G-SYNC - Amazon US',
        data: [0, 0, 0, 0, 1000, 1500, 300, 2300, 400, 700, 200, 450, 800, 900],
        color: 'rgb(255, 205, 52)',
        cursor: 'pointer',
        borderRadius: 'none'
      },
      {
        name: 'Dell S3423DWC Curved USB-C Monitor - 34-Inch WQHD  100Hz 4Ms 21:9 Display, USB-C Connectivity, 2 x 5w Audio …',
        data: [0, 0, 0, 0, 500, 1000, 100, 1800, 200, 450, 200, 450, 800, 900],
        color: 'rgb(20, 203, 196)',
        cursor: 'pointer',
        borderRadius: 'none'
      },
      {
        name: 'Dell Curved Gaming Monitor 27 Inch Curved with 165Hz Refresh Rate, QHD  Display, Black - S2722DGM - Amazon US',
        data: [0, 0, 0, 0, 0, 500, 1000, 300, 1500, 600, 200, 450, 800, 900],
        color: 'rgb(232, 131, 58)',
        cursor: 'pointer',
        borderRadius: 'none'
      },
      {
        name: 'Others',
        data: [24, 24, 78, 402, 402, 1183, 200, 1000, 300, 700, 200, 450, 800, 900],
        color: 'rgb(101, 112, 124)',
        cursor: 'pointer',
        borderRadius: 'none'
      }
    ]
  };


  return (
      <div className='border'>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
  );
};

// @ts-ignore
export default ReviewVolumeChart;

