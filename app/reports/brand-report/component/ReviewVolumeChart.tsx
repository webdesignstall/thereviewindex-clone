/*
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data for the chart
const data = [
  { year: "2005", oneStar: 0, twoStar: 0, threeStar: 0, fourStar: 3, fiveStar: 9 },
  { year: "2006", oneStar: 1, twoStar: 2, threeStar: 2, fourStar: 5, fiveStar: 14 },
  { year: "2007", oneStar: 4, twoStar: 0, threeStar: 0, fourStar: 3, fiveStar: 14 },
  { year: "2008", oneStar: 4, twoStar: 4, threeStar: 0, fourStar: 9, fiveStar: 11 },
  { year: "2009", oneStar: 3, twoStar: 4, threeStar: 4, fourStar: 18, fiveStar: 33 },
  { year: "2010", oneStar: 13, twoStar: 4, threeStar: 10, fourStar: 13, fiveStar: 38 },
  { year: "2011", oneStar: 14, twoStar: 6, threeStar: 3, fourStar: 25, fiveStar: 54 },
  { year: "2012", oneStar: 28, twoStar: 22, threeStar: 38, fourStar: 115, fiveStar: 366 },
  { year: "2013", oneStar: 103, twoStar: 58, threeStar: 86, fourStar: 280, fiveStar: 1085 },
  { year: "2014", oneStar: 140, twoStar: 100, threeStar: 116, fourStar: 455, fiveStar: 1664 },
  { year: "2015", oneStar: 241, twoStar: 159, threeStar: 203, fourStar: 624, fiveStar: 2706 },
  { year: "2016", oneStar: 301, twoStar: 160, threeStar: 265, fourStar: 577, fiveStar: 2701 },
  { year: "2017", oneStar: 265, twoStar: 148, threeStar: 206, fourStar: 401, fiveStar: 2016 },
  { year: "2018", oneStar: 303, twoStar: 127, threeStar: 170, fourStar: 318, fiveStar: 1702 },
  { year: "2019", oneStar: 287, twoStar: 139, threeStar: 188, fourStar: 392, fiveStar: 2212 },
  { year: "2020", oneStar: 437, twoStar: 186, threeStar: 242, fourStar: 439, fiveStar: 2273 },
  { year: "2021", oneStar: 423, twoStar: 175, threeStar: 206, fourStar: 353, fiveStar: 1793 },
  { year: "2022", oneStar: 356, twoStar: 129, threeStar: 153, fourStar: 234, fiveStar: 1043 },
  { year: "2023", oneStar: 391, twoStar: 131, threeStar: 157, fourStar: 213, fiveStar: 1037 },
  { year: "2024", oneStar: 273, twoStar: 84, threeStar: 107, fourStar: 183, fiveStar: 983 },
];

// Correct sorting by total review count (fixing previous issue)
const sortedData = data.map((item) => {
  const totalReviews =
    item.oneStar + item.twoStar + item.threeStar + item.fourStar + item.fiveStar;
  return { ...item, totalReviews };
}).sort((a, b) => b.totalReviews - a.totalReviews);

// Colors for different review types
const colors = {
  oneStar: "#D4465C",    // Red
  twoStar: "#F4585E",    // Bright Red
  threeStar: "#08CAC3",  // Yellow
  fourStar: "#E88444",   // Teal
  fiveStar: "#65707B",   // Green
};

// Calculate the sum of reviews for each rating type
const calculateSums = (data: any[]) => {
  return data.reduce(
    (sums, item) => {
      sums.oneStar += item.oneStar;
      sums.twoStar += item.twoStar;
      sums.threeStar += item.threeStar;
      sums.fourStar += item.fourStar;
      sums.fiveStar += item.fiveStar;
      return sums;
    },
    { oneStar: 0, twoStar: 0, threeStar: 0, fourStar: 0, fiveStar: 0 }
  );
};

const sums = calculateSums(sortedData);

export default function ReviewVolumeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Volume Trend</CardTitle>
        <CardDescription className="hidden"></CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={sortedData}
            barGap={8} // Adjust gap between bars
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60, // Adjust bottom margin for label spacing
            }}
            barCategoryGap={10} // Adjust space between category groups
          >
            {/!* X-Axis: Year with label positioning and rotation for better readability *!/}
            <XAxis
              dataKey="year"
              label={{ value: "Year", position: "bottom", offset: 10 }}
              angle={-45} // Rotate labels for better visibility on smaller screens
              tickMargin={10} // Add space between ticks and labels
              axisLine={false} // Removes the axis line
              tickLine={false} // Removes the tick marks
            />
            {/!* Y-Axis: Review Count with appropriate label positioning *!/}
            <YAxis
              label={{ value: "Review Count", angle: -90, position: "insideLeft", offset: 10 }}
              domain={[0, "dataMax"]} // Ensures Y-axis starts at 0
              tickMargin={10} // Space between ticks and labels
              axisLine={false} // Removes the axis line
              tickLine={false} // Removes the tick marks
              // grid={false} // Removes the grid lines
            />


            {/!* Tooltip customization *!/}
            <Tooltip
              active={false} // This disables the hover effect
              contentStyle={{ backgroundColor: 'transparent' }} // Remove hover background color
              itemStyle={{ color: '#000' }} // Optional: change text color on hover
            />

            {/!* Legend positioning *!/}
            {/!* <Legend verticalAlign="top" align="center" /> *!/}

            {/!* Bars with colors for different star ratings *!/}
            <Bar dataKey="fiveStar" stackId="a" fill={colors.fiveStar} />
            <Bar dataKey="fourStar" stackId="a" fill={colors.fourStar} />
            <Bar dataKey="threeStar" stackId="a" fill={colors.threeStar} />
            <Bar dataKey="twoStar" stackId="a" fill={colors.twoStar} />
            <Bar dataKey="oneStar" stackId="a" fill={colors.oneStar} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
*/


'use client'
import React from 'react';
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
      text: 'Review Volume Trend',
      align: 'left',
      style: {
        color: '#000000', // Light text color for dark mode
        fontSize: '18px',
      },
    },
    xAxis: {
      categories: [
        '2006', '2008', '2010', '2012', '2014',
        '2016', '2018', '2020', '2022', '2024'
      ],
      labels: {
        style: {
          color: '#000000', // White text for dark mode
        }
      }
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
        style: {
          color: '#000000', // White text for dark mode
        }
      },
      gridLineWidth: 0
    },

    legend: {
      enabled: true,
      align: 'leftBottom',
      verticalAlign: 'bottom',
      horizontalAlign: 'bottom',
      itemStyle: {
        color: '#000000', // White text for dark mode
      },
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
        }
      }
    },
    series: [
      {
        name: 'Dell E2414HM 24" Screen LED-Lit Monitor - Amazon US',
        data: [0, 0, 0, 0, 1500, 2500, 3000, 3200, 3100, 2800, 200, 450, 800, 900],
        color: 'rgb(84, 190, 238)',
        cursor: 'pointer',
        borderRadius: 'none',
      },
      {
        name: 'Dell UltraSharp U2412M 24-Inch Screen LED-Lit Monitor, Black - Amazon US',
        data: [0, 0, 0, 200, 1200, 2000, 2500, 2700, 2600, 2400, 200, 450, 800, 900],
        color: 'rgb(172, 86, 174)',
        cursor: 'pointer',
        borderRadius: 'none'
      },
      {
        name: 'Dell Gaming S2716DGR 27.0" QHD Wide 1440p Screen LED-Lit Monitor with G-SYNC - Amazon US',
        data: [0, 0, 0, 0, 1000, 1500, 2000, 2300, 2200, 2100, 200, 450, 800, 900],
        color: 'rgb(255, 205, 52)',
        cursor: 'pointer',
        borderRadius: 'none'
      },
      {
        name: 'Dell S3423DWC Curved USB-C Monitor - 34-Inch WQHD  100Hz 4Ms 21:9 Display, USB-C Connectivity, 2 x 5w Audio …',
        data: [0, 0, 0, 0, 500, 1000, 1500, 1800, 1700, 1600, 200, 450, 800, 900],
        color: 'rgb(20, 203, 196)',
        cursor: 'pointer',
        borderRadius: 'none'
      },
      {
        name: 'Dell Curved Gaming Monitor 27 Inch Curved with 165Hz Refresh Rate, QHD  Display, Black - S2722DGM - Amazon US',
        data: [0, 0, 0, 0, 0, 500, 1000, 1400, 1500, 1300, 200, 450, 800, 900],
        color: 'rgb(232, 131, 58)',
        cursor: 'pointer',
        borderRadius: 'none'
      },
      {
        name: 'Others',
        data: [24, 24, 78, 402, 402, 1183, 800, 1000, 1100, 1200, 200, 450, 800, 900],
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

