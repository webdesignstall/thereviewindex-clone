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
} from "@/components/ui/card";
import { BarChartComponent } from "@/app/compare/component/BarChart";

// Updated Data for Positive and Negative Mentions
const data = [
  { category: "Clarity", positive: 14693, negative: -1795 },
  { category: "Display", positive: 8214, negative: -2552 },
  { category: "Price", positive: 8265, negative: -793 },
  { category: "Reliability", positive: 3773, negative: -2982 },
  { category: "Color", positive: 5289, negative: -947 },
  { category: "Marketplace", positive: 2746, negative: -2084 },
  { category: "Size", positive: 4116, negative: -415 },
  { category: "Usage", positive: 4494, negative: -274 },
  { category: "Screen", positive: 3201, negative: -829 },
  { category: "Usage / Gaming", positive: 3966, negative: -239 },
  { category: "Build Quality", positive: 2724, negative: -957 },
  { category: "Design", positive: 3598, negative: -272 },
  { category: "Installation & Assembly", positive: 3468, negative: -234 }
];

export default function TopicsChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Ensure component only renders on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering the chart on the server
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Topics And Sentiment</CardTitle>
        <CardDescription className="hidden">2011 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            height={300}
            data={data}
            stackOffset="sign"
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5
            }}
            barCategoryGap={1} // Reduces the space between categories (groups of bars)
            barGap={0.5}       // Reduces the space between individual bars within a group
          >
            {/* Remove CartesianGrid to hide background lines */}
            {/* <CartesianGrid strokeDasharray="3 3" /> */}

            <XAxis dataKey="category"
              axisLine={true} // Removes the axis line
              tickLine={false} // Removes the tick marks
            />

            {/* Remove YAxis numbers (ticks and axis line) */}
            <YAxis
              axisLine={false} // Removes the Y axis line
              tick={false} // Removes the numbers (ticks) on the Y axis
            />

            {/* Customize Tooltip to remove hover effect */}
            <Tooltip
              active={false} // This disables the hover effect
              contentStyle={{ backgroundColor: 'transparent' }} // Remove hover background color
              itemStyle={{ color: '#000' }} // Optional: change text color on hover
            />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="positive" fill="#00bf8a" stackId="stack" isAnimationActive={false} /> {/* Green for positive */}
            <Bar dataKey="negative" fill="#F44336" stackId="stack" isAnimationActive={false} /> {/* Red for negative */}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
