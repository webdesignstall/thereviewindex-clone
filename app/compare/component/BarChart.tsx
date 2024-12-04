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
  { feature: "Clarity", rating: 17000 },
  { feature: "Display", rating: 13000 },
  { feature: "Price", rating: 10000 },
  { feature: "Reliability", rating: 9000 },
  { feature: "Color", rating: 7500 },
  { feature: "Marketplace", rating: 6000 },
  { feature: "Size", rating: 6500 },
  { feature: "Usage", rating: 6200 },
  { feature: "Screen", rating: 5100 },
  { feature: "Usage/Gaming", rating: 5100 },
  { feature: "Build Quality", rating: 5000 },
  { feature: "Design", rating: 4800 },
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
      <CardHeader className="hidden">
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
                tickFormatter={(value) => value} // Shorten feature name if necessary
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
      <CardFooter>
        <div className="flex justify-center items-center w-full">Dell (Brand) - Amazon US</div>
      </CardFooter>
    </Card>
  );
}
