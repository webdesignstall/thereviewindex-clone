"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"

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
const chartData = [
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
  { category: "Installation & Assembly", positive: 3464, negative: -234 },
]

// Configuration for the chart
const chartConfig = {
  positive: {
    label: "Positive Mentions",
    color: "hsl(var(--chart-1))", // Color for positive mentions
  },
  negative: {
    label: "Negative Mentions",
    color: "hsl(var(--chart-2))", // Color for negative mentions
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Positive vs Negative Mentions</CardTitle>
        <CardDescription>Mentions by Category</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart width={600} height={300} data={chartData} stackOffset="sign">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}  // Display full category name
            />
            <YAxis />
            <Tooltip content={<ChartTooltipContent indicator="dashed" />} />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            {/* Positive and Negative Bars */}
            <Bar dataKey="positive" fill="var(--color-desktop)" stackId="stack" radius={4} />
            <Bar dataKey="negative" fill="var(--color-mobile)" stackId="stack" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing mentions for different product categories
        </div>
      </CardFooter>
    </Card>
  )
}
