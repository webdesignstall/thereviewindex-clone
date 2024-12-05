'use client'
import React from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TopicsChartComponent: React.FC = () => {
    const chartOptions: Options = {
        chart: {
            type: 'normal',
            height: 480,
            backgroundColor: 'transparent',
        },
        title: {
            text: '<p class="text-neutral-700 dark:text-neutral-50">Topics & Sentiment</p>',
            align: 'left',
            useHTML: true,
        },
        xAxis: {
            categories: [
                'Clarity', 'Display', 'Price', 'Reliability', 'Color',
                'Marketplace', 'Size', 'Usage', 'Screen', 'Gaming',
                'Build Quality', 'Design', 'Installation & Assembly',
            ],
            labels: {
                useHTML: true, // Enables HTML rendering
                formatter: function () {
                    return `<span class="dark:text-neutral-50 text-black">${this.value}</span>`;
                },
            },
        },
        yAxis: {
            title: {
                text: ' ',
            },
            min: -5000,
            max: 20000,
            labels: {
                useHTML: true, // Enable HTML rendering
                formatter: function () {
                    // Check if dark mode is active
                    const isDarkMode = document.documentElement.classList.contains('dark');
                    const color = isDarkMode ? '#ffffff' : '#333333'; // Light or dark color

                    return `<span style="color: ${color};">${this.value}</span>`;
                },
            },
            gridLineWidth: 0, // Removes the grid lines on the Y-axis
            opposite: true,    // Keeps the Y-axis on the right
            lineWidth: 0,      // Removes the Y-axis line
        },

        plotOptions: {
            column: {
                stacking: 'normal', // Enables stacking
                pointPadding: 0, // Controls padding between columns
                groupPadding: 0.02, // Controls padding between column groups
                dataLabels: {
                    enabled: false,
                    format: '{y}'
                },
                borderWidth: 0,  // Ensure no border width
                borderColor: 'transparent',  // Ensure no border color
            },
        },
        series: [
            {
                type: 'column',
                name: 'Positive Sentiment',
                data: [
                    14679, 8207, 8258, 3768, 5284, 2742, 4113, 4490, 3194, 3962, 3596, 3464,
                ],
                color: '#1AAE9F', // Green for positive
                cursor: 'pointer',
                borderRadius: 'none'
            },
            {
                type: 'column',
                name: 'Negative Sentiment',
                data: [
                    -1794, -2550, -792, -2980, -947, -2081, -415, -274, -827, -957, -272, -234,
                ],
                color: '#D3455B', // Red for negative
                cursor: 'pointer',
                borderRadius: 'none'
            },
        ],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>',
        },
        legend: {
            enabled: false, // Disable the legend
        },
        credits: {
            enabled: false  // Disable the Highcharts credits (remove "highcharts.com" text)
        },
    };

    return (
        <div className='border'>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

// @ts-ignore
export default TopicsChartComponent;
