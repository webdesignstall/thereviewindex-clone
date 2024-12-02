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

// Simulating random data for 10 different categories from 2012-2024 with values between 0-10
const chartData = Array.from({ length: 13 }, (_, i) => {
  const year = 2012 + i
  return {
    year: year.toString(),
    category1: Math.floor(Math.random() * 11),
    category2: Math.floor(Math.random() * 11),
    category3: Math.floor(Math.random() * 11),
    category4: Math.floor(Math.random() * 11),
    category5: Math.floor(Math.random() * 11),
    category6: Math.floor(Math.random() * 11),
    category7: Math.floor(Math.random() * 11),
    category8: Math.floor(Math.random() * 11),
    category9: Math.floor(Math.random() * 11),
    category10: Math.floor(Math.random() * 11),
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
  category5: {
    label: "Category 5",
    color: "hsl(var(--chart-5))",
  },
  category6: {
    label: "Category 6",
    color: "hsl(var(--chart-6))",
  },
  category7: {
    label: "Category 7",
    color: "hsl(var(--chart-7))",
  },
  category8: {
    label: "Category 8",
    color: "hsl(var(--chart-8))",
  },
  category9: {
    label: "Category 9",
    color: "hsl(var(--chart-9))",
  },
  category10: {
    label: "Category 10",
    color: "hsl(var(--chart-10))",
  },
} satisfies ChartConfig

export function CastChart() {
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
              left: 12,
              right: 12,
              top: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(2)} // Only show last 2 digits of year
            />
            <YAxis domain={[0, 10]} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Legend />

            {/* Multiple lines for different categories */}
            {Object.keys(chartConfig).map((category: any) => (
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
              Showing data for 10 categories from 2012 - 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
