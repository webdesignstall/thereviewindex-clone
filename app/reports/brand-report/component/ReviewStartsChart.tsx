'use client';

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
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

// Sort data in descending order by total review count
const sortedData = data.map((item) => {
  const totalReviews =
    item.oneStar + item.twoStar + item.threeStar + item.fourStar + item.fiveStar;
  return { ...item, totalReviews };
}).sort((a, b) => b.totalReviews + a.totalReviews);

// Colors for different review types
const colors = {
  oneStar: "#9d0505",    // Red
  twoStar: "#e93838",    // Bright Red
  threeStar: "#e7cc0f",  // Yellow
  fourStar: "#00998b",   // Teal
  fiveStar: "#0cb959",   // Green
};

export default function ReviewChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={sortedData}
        barGap={4} // Gap between bars
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 50,
        }}
      >
        <XAxis dataKey="year" label={{ value: "Year", position: "bottom", offset: 10 }} />
        <YAxis 
          label={{ value: "Review Count", angle: -90, position: "insideLeft" }} 
          domain={[0, "dataMax"]} // Ensures Y-axis starts at 0
        />
        <Tooltip />
        <Legend />

        <Bar dataKey="fiveStar" stackId="a" fill={colors.fiveStar} />
        <Bar dataKey="fourStar" stackId="a" fill={colors.fourStar} />
        <Bar dataKey="threeStar" stackId="a" fill={colors.threeStar} />
        <Bar dataKey="twoStar" stackId="a" fill={colors.twoStar} />
        <Bar dataKey="oneStar" stackId="a" fill={colors.oneStar} />
      </BarChart>
    </ResponsiveContainer>
  );
}
