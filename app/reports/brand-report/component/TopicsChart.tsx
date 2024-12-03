'use client'

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Data for Positive and Negative Mentions
const data = [
  { category: "Clarity", positive: 14679, negative: -1794 },
  { category: "Display", positive: 8207, negative: -2550 },
  { category: "Price", positive: 8258, negative: -792 },
  { category: "Reliability", positive: 3768, negative: -2980 },
  { category: "Color", positive: 5284, negative: -947 },
  { category: "Marketplace", positive: 2742, negative: -2081 },
  { category: "Size", positive: 4113, negative: -415 },
  { category: "Usage", positive: 4490, negative: -274 },
  { category: "Screen", positive: 3194, negative: -827 },
  { category: "Usage / Gaming", positive: 3962, negative: -239 },
  { category: "Build Quality", positive: 2723, negative: -957 },
  { category: "Design", positive: 3596, negative: -272 },
  { category: "Installation & Assembly", positive: 3464, negative: -234 }
];

export default function TopicsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Dell Monitors Performance</CardTitle>
        <CardDescription>2011 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <BarChart
          width={600}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          barCategoryGap={1} // Reduces the space between categories (groups of bars)
          barGap={.5}          // Reduces the space between individual bars within a group
        >
          {/* Remove CartesianGrid to hide background lines */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <XAxis dataKey="category" />

          {/* Remove YAxis numbers (ticks and axis line) */}
          <YAxis
            axisLine={false} // Removes the Y axis line
            tick={false} // Removes the numbers (ticks) on the Y axis
          />

          <Tooltip
            contentStyle={{ backgroundColor: 'transparent' }} // Remove hover background color
            itemStyle={{ color: '#000' }} // Optional: change text color on hover
          />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="positive" fill="#00bf8a" stackId="stack" isAnimationActive={false} /> {/* Green for positive */}
          <Bar dataKey="negative" fill="#F44336" stackId="stack" isAnimationActive={false} /> {/* Red for negative */}
        </BarChart>
      </CardContent>
    </Card>
  );
}


