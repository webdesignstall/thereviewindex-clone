'use client'

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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

// Demo data for the bar chart with features and ratings
const chartData = [
  { feature: "Clarity", rating: 5000 },
  { feature: "Price", rating: 10000 },
  { feature: "Color", rating: 15000 },
  { feature: "Reliability", rating: 20000 },
  { feature: "Marketplace", rating: 8000 },
  { feature: "Size", rating: 12000 },
  { feature: "Usage", rating: 15000 },
  { feature: "Screen", rating: 12000 },
  { feature: "Build Quality", rating: 17000 },
  { feature: "Design", rating: 14000 },
];

// Chart configuration
const chartConfig = {
  desktop: {
    label: "Product Feature Ratings",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Feature Ratings</CardTitle>
        <CardDescription>Demo Data: Ratings from 0k to 20k</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="feature"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)} // Shorten feature name if necessary
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value / 1000}k`} // Format Y-axis as "0k", "5k", etc.
              />
              <Tooltip
                content={<ChartTooltipContent hideLabel />}
                cursor={false}
              />
              <Bar
                dataKey="rating"
                fill="var(--color-desktop)"
                radius={8}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing ratings for various product features
        </div>
      </CardFooter>
    </Card>
  );
}
