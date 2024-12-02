'use client'

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Updated demo chart data (Years: 2005 to 2024, Data: 0k to 4k)
const chartData = [
  { year: "2005", revenue: 1200 },
  { year: "2006", revenue: 1400 },
  { year: "2007", revenue: 1600 },
  { year: "2008", revenue: 1800 },
  { year: "2009", revenue: 2000 },
  { year: "2010", revenue: 2200 },
  { year: "2011", revenue: 2300 },
  { year: "2012", revenue: 2500 },
  { year: "2013", revenue: 2700 },
  { year: "2014", revenue: 2900 },
  { year: "2015", revenue: 3100 },
  { year: "2016", revenue: 3300 },
  { year: "2017", revenue: 3500 },
  { year: "2018", revenue: 3700 },
  { year: "2019", revenue: 3900 },
  { year: "2020", revenue: 3800 },
  { year: "2021", revenue: 4000 },
  { year: "2022", revenue: 4200 },
  { year: "2023", revenue: 4300 },
  { year: "2024", revenue: 4500 },
];

// Chart configuration
const chartConfig = {
  desktop: {
    label: "Revenue Over Time",
    color: "hsl(var(--chart-1))", // Ensure this color variable is defined in your global styles
  },
} satisfies ChartConfig;

export function LineChartYear() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Line Chart</CardTitle>
        <CardDescription>2005 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value}  // Show the full year label
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                domain={[0, 5000]}  // Set Y-axis domain to range from 0 to 5000
                tickFormatter={(value) => `${value / 1000}k`}  // Format Y-axis as "0k", "1k", etc.
              />
              <Tooltip
                content={<ChartTooltipContent hideLabel />}
                cursor={false}
              />
              <Line
                dataKey="revenue"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue from 2005 to 2024
        </div>
      </CardFooter>
    </Card>
  );
}
