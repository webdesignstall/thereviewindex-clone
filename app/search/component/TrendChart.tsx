"use client"

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample demo data for 2005-2024 with -2k to 4k values
const chartData = [
  { year: "2005", value1: -1500, value2: 2200 },
  { year: "2006", value1: 1800, value2: 2500 },
  { year: "2007", value1: -1000, value2: 3000 },
  { year: "2008", value1: -2500, value2: 2300 },
  { year: "2009", value1: 1500, value2: 2900 },
  { year: "2010", value1: 2200, value2: 3200 },
  { year: "2011", value1: 1800, value2: 3400 },
];

// Chart configuration
const chartConfig = {
  desktop: {
    label: "Revenue Over Time",
    color: "hsl(var(--chart-1))", // Make sure this color is set in your global styles
  },
} satisfies ChartConfig;

export function LineChartYear() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase text-lg text-center">Sentiment Trend</CardTitle>
        <CardDescription className="hidden">Year-wise financial data</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[-2000, 4000]} tickFormatter={(value) => `${value / 1000}k`} />
            <Tooltip content={<ChartTooltipContent hideLabel />} />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="value1" fill="#8884d8" />
            <Bar dataKey="value2" fill="#82ca9d" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm hidden">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
