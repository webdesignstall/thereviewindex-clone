"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend } from "recharts"

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

// Simulating random data for 4 categories from 2012-2024 with values between 0-10
const chartData = Array.from({ length: 13 }, (_, i) => {
  const year = 2012 + i
  return {
    year: year.toString(),
    category1: Math.floor(Math.random() * 11),
    category2: Math.floor(Math.random() * 11),
    category3: Math.floor(Math.random() * 11),
    category4: Math.floor(Math.random() * 11),
  }
})

const chartConfig:any = {
  category1: {
    label: "Category 1",
    color: "hsl(var(--chart-1))",
  },
  category2: {
    label: "Category 2",
    color: "hsl(var(--chart-2))",
  },
  category3: {
    label: "Category 3",
    color: "hsl(var(--chart-3))",
  },
  category4: {
    label: "Category 4",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function ReviewRatingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple Categories</CardTitle>
        <CardDescription>2012 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              bottom: 5,
              left: 12,
              right: 12,
            }}
            layout="vertical" // Horizontal layout
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              type="number" // X-axis is numeric
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              dataKey="year"
              type="category" // Y-axis is categorical (for the years)
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Legend />

            {/* Only 4 lines for simplicity */}
            {["category1", "category2", "category3", "category4"].map((category) => (
              <Line
                key={category}
                dataKey={category}
                type="monotone"
                stroke={chartConfig[category].color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing data for 4 categories from 2012 - 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
