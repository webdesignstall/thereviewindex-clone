'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

// Correct sorting by total review count (fixing previous issue)
const sortedData = data.map((item) => {
  const totalReviews =
    item.oneStar + item.twoStar + item.threeStar + item.fourStar + item.fiveStar;
  return { ...item, totalReviews };
}).sort((a, b) => b.totalReviews + a.totalReviews);

// Colors for different review types
const colors = {
  oneStar: "#D4465C",    // Red
  twoStar: "#F4585E",    // Bright Red
  threeStar: "#F7C33F",  // Yellow
  fourStar: "#5DCFC5",   // Teal
  fiveStar: "#17AD9F",   // Green
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

export default function ReviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Stars Split Count</CardTitle>
      </CardHeader>
      <div className="flex">
        <CardContent className="w-2/3">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={sortedData}
              barGap={4} // Adjust gap between bars
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60, // Adjust bottom margin for label spacing
              }}
              barCategoryGap={6} // Adjust space between category groups
            >
              {/* X-Axis: Year with label positioning and rotation for better readability */}
              <XAxis
                dataKey="year"
                label={{ value: "Year", position: "bottom", offset: 10 }}
                angle={-45} // Rotate labels for better visibility on smaller screens
                tickMargin={10} // Add space between ticks and labels
              />
              {/* Y-Axis: Review Count with appropriate label positioning */}
              <YAxis
                label={{ value: "Review Count", angle: -90, position: "insideLeft", offset: 10 }}
                domain={[0, "dataMax"]} // Ensures Y-axis starts at 0
                tickMargin={10} // Space between ticks and labels
              />

              {/* Tooltip customization */}
              <Tooltip
                active={false} // This disables the hover effect
                contentStyle={{ backgroundColor: 'transparent' }} // Remove hover background color
                itemStyle={{ color: '#000' }} // Optional: change text color on hover
              />

              {/* Legend positioning */}
              <Legend verticalAlign="top" align="center" />

              {/* Bars with colors for different star ratings */}
              <Bar dataKey="fiveStar" stackId="a" fill={colors.fiveStar} />
              <Bar dataKey="fourStar" stackId="a" fill={colors.fourStar} />
              <Bar dataKey="threeStar" stackId="a" fill={colors.threeStar} />
              <Bar dataKey="twoStar" stackId="a" fill={colors.twoStar} />
              <Bar dataKey="oneStar" stackId="a" fill={colors.oneStar} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>

        {/* Right Sidebar with Color Legend */}
        <div className="w-1/3 p-4">
          <h3 className="text-lg font-semibold mb-4">Review Count by Rating</h3>
          {/* Color Legend */}
          <div className="flex flex-col space-y-2">
            {/* One Star */}
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: colors.oneStar }}></div>
              <span className="text-lg">1 Star: {sums.oneStar}</span>
            </div>
            {/* Two Star */}
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: colors.twoStar }}></div>
              <span className="text-lg">2 Stars: {sums.twoStar}</span>
            </div>
            {/* Three Star */}
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: colors.threeStar }}></div>
              <span className="text-lg">3 Stars: {sums.threeStar}</span>
            </div>
            {/* Four Star */}
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: colors.fourStar }}></div>
              <span className="text-lg">4 Stars: {sums.fourStar}</span>
            </div>
            {/* Five Star */}
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: colors.fiveStar }}></div>
              <span className="text-lg">5 Stars: {sums.fiveStar}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
