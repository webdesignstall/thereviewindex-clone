'use client'

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

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

// Updated data for the line chart (2005-2024 range with values 70, 80, 90, 100)
const chartData = [
  { year: "2005", value: 100 },
  { year: "2006", value: 80 },
  { year: "2007", value: 82 },
  { year: "2008", value: 70 },
  { year: "2009", value: 85 },
  { year: "2010", value: 65 },
  { year: "2011", value: 75 },
  { year: "2012", value: 85 },
  { year: "2013", value: 70 },
  { year: "2014", value: 72 },
  { year: "2015", value: 75 },
  { year: "2016", value: 76 },
  { year: "2017", value: 80 },
  { year: "2018", value: 75 },
  { year: "2019", value: 68 },
  { year: "2020", value: 65 },
  { year: "2021", value: 60 },
  { year: "2022", value: 80 },
  { year: "2023", value: 55 },
  { year: "2024", value: 60 },
]

// Chart configuration
const chartConfig = {
  desktop: {
    label: "Product Rating",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function CsatChart() {
  return (
    <Card>
      <CardHeader className="hidden">
        <CardTitle>Line Chart</CardTitle>
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
                tickFormatter={(value) => value} // Display the full year
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                domain={[70, "dataMax + 5"]} // Allow space for the highest value
              />
              <Tooltip
                content={<ChartTooltipContent hideLabel />}
                cursor={false}
              />
              <Line
                dataKey="value"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex justify-center items-center w-full">Dell (Brand) - Amazon US</div>
      </CardFooter>
    </Card>
  )
}
