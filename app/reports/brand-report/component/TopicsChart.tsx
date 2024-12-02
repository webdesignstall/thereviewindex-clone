"use client"

import { CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, LabelList } from "recharts"

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
import { TrendingUp } from "lucide-react"

// Simulating data for Topics & Sentiment (positive and negative sentiment scores for each topic)
const chartData = [
  { topic: "Display", positive: 8, negative: 2 },
  { topic: "Price", positive: 6, negative: 4 },
  { topic: "Reliability", positive: 7, negative: 3 },
  { topic: "Color", positive: 5, negative: 5 },
  { topic: "Marketplace", positive: 9, negative: 1 },
  { topic: "Size", positive: 6, negative: 4 },
  { topic: "Usage", positive: 8, negative: 2 },
  { topic: "Screen", positive: 7, negative: 3 },
  { topic: "Build Quality", positive: 9, negative: 1 },
  { topic: "Design", positive: 8, negative: 2 },
]

const chartConfig = {
  positive: {
    label: "Positive",
    color: "hsl(var(--chart-1))",
  },
  negative: {
    label: "Negative",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function SentimentBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Topics & Sentiment Bar Chart</CardTitle>
        <CardDescription>Sentiment Analysis: Positive vs Negative</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              bottom: 5,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="topic"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Legend />

            {/* Positive and Negative Bars for each Topic */}
            <Bar dataKey="positive" name="Positive" fill={chartConfig.positive.color} barSize={15}>
              {chartData.map((item, index) => (
                <Cell key={`cell-positive-${index}`} fill={chartConfig.positive.color} />
              ))}
              <LabelList position="top" dataKey="positive" fill="#fff" />
            </Bar>
            <Bar dataKey="negative" name="Negative" fill={chartConfig.negative.color} barSize={15}>
              {chartData.map((item, index) => (
                <Cell key={`cell-negative-${index}`} fill={chartConfig.negative.color} />
              ))}
              <LabelList position="top" dataKey="negative" fill="#fff" />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Displaying sentiment analysis for topics <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing positive and negative sentiment scores for 10 product attributes
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
