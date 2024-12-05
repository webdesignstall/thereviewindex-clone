'use client'
import React from 'react';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TopicsChartComponent: React.FC = () => {
    const chartOptions: Options = {
        chart: {
            type: 'column',
            height: 480,
        },
        title: {
            text: 'Topics & Sentiment',
            align: 'left',
        },
        xAxis: {
            categories: [
                'Clarity', 'Display', 'Price', 'Reliability', 'Color',
                'Marketplace', 'Size', 'Usage', 'Screen', 'Gaming',
                'Build Quality', 'Design', 'Installation & Assembly',
            ],
        },
        yAxis: {
            title: {
                text: ' ',
            },
            min: -5000,
            max: 20000,
            labels: {
                format: '{value}',
            },
            opposite: true,
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
                borderWidth: 0,
            },
        },
        series: [
            {
                type: 'column',
                name: 'Positive Sentiment',
                data: [
                    14679, 8207, 8258, 3768, 5284, 2742, 4113, 4490, 3194, 3962, 3596, 3464,
                ],
                color: '#00b894', // Green for positive
                cursor: 'pointer'
            },
            {
                type: 'column',
                name: 'Negative Sentiment',
                data: [
                    -1794, -2550, -792, -2980, -947, -2081, -415, -274, -827, -957, -272, -234,
                ],
                color: '#d63031', // Red for negative
                cursor: 'pointer'
            },
        ],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>',
        },
        legend: {
            enabled: false, // Disable the legend
        },
    };

    return (
        <div className='border'>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

export default TopicsChartComponent;
