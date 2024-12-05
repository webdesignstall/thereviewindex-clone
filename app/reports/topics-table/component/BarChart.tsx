'use client'
import React from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({chartValue, negative = false}: {chartValue: number, negative?: boolean}) => {
    const chartOptions: Options = {
        chart: {
            type: 'bar',  // Use 'bar' to display horizontal bars
            backgroundColor: 'transparent',
            height: 80
        },
        title: {
            text: undefined,  // Remove the title
        },
        xAxis: {
            reversed: true,
            visible: false,  // Hide the x-axis
        },
        yAxis: {
            reversed: true,
            visible: false,  // Hide the y-axis
        },
        plotOptions: {
            bar: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,  // Disable data labels
                },
                borderWidth: 0,  // No border around bars
                borderColor: 'transparent',  // Ensure no border color
                pointPadding: 0,
                groupZPadding: 0
            },
        },
        series: [
            {
                type: 'bar',
                name: undefined,
                data: [chartValue],  // The value for the bar
                color: negative ? '#D3455B' :'#1AAE9F' ,
                cursor: 'pointer',
                borderRadius: 'none',  // Ensure the bar edges are not rounded
            },
        ],
        tooltip: {
            enabled: false,  // Disable tooltips
        },
        legend: {
            enabled: false,  // Hide the legend
        },
        credits: {
            enabled: false  // Disable the Highcharts credits (remove "highcharts.com" text)
        },
    };

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

// @ts-ignore
export default BarChart;
