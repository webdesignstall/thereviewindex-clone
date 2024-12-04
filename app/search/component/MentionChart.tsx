'use client'

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Updated data for 2005-2020
const data = [
  { year: "2005", positive: 200, negative: -100 },
  { year: "2006", positive: 300, negative: -350 },
  { year: "2007", positive: 400, negative: -450 },
  { year: "2008", positive: 600, negative: -550},
  { year: "2009", positive: 1000, negative: -700 },
  { year: "2010", positive: 1500, negative: -900 },
  { year: "2011", positive: 2200, negative: -1200 },
  { year: "2012", positive: 8000, negative: -3500 },
  { year: "2013", positive: 8700, negative: -4000 },
  { year: "2014", positive: 9100, negative: -3800 },
  { year: "2015", positive: 9600, negative: -3700 },
  { year: "2016", positive: 10400, negative: -3900 },
  { year: "2017", positive: 11200, negative: -4200 },
  { year: "2018", positive: 12000, negative: -4300 },
  { year: "2019", positive: 6000, negative: -2200 },
  { year: "2020", positive: 4000, negative: -1600 },
];

export function MentionChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Ensure component only renders on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering the chart on the server
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="uppercase text-lg text-center">Mentions Trend</CardTitle>
        <CardDescription className="hidden">2005 - 2020</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            className="w-full"
            width={600}  // Use 100% of the container's width
            height={350}
            data={data}
            stackOffset="sign"
            margin={{
              top: 5,
              right: 50,  // Increased right margin for more space
              left: 20,
              bottom: 35,
            }}
            barCategoryGap={2} // Reduces the space between categories (groups of bars)
            barGap={2}          // Reduces the space between individual bars within a group
          >
            {/* Remove CartesianGrid to hide background lines */}
            {/* <CartesianGrid strokeDasharray="3 3" /> */}

            <XAxis dataKey="year" />
            
            {/* Move Y-Axis to the right side */}
            <YAxis
              axisLine={false} // Keeps the Y axis line
              tick={true} // Shows the ticks (numbers) on the Y axis
              orientation="right" // Moves Y-Axis to the right side
            />

            {/* Customize Tooltip to remove hover effect */}
            <Tooltip
              active={false} // This disables the hover effect
              contentStyle={{ backgroundColor: 'transparent' }} // Remove hover background color
              itemStyle={{ color: '#000' }} // Optional: change text color on hover
            />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="positive" fill="#1AAE9F" stackId="stack" isAnimationActive={true} /> {/* Green for positive */}
            <Bar dataKey="negative" fill="#D3455B" stackId="stack" isAnimationActive={false} /> {/* Red for negative */}
          </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
