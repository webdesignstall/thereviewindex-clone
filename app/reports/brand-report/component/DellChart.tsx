"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart, Tooltip } from "recharts"

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

// Chart data for Positive, Negative, and Neutral sentiments
const chartData = [
  { sentiment: "Positive", value: 65.8, fill: "#4caf50" }, // Green for Positive
  { sentiment: "Negative", value: 26.9, fill: "#f44336" }, // Red for Negative
  { sentiment: "Neutral", value: 7.3, fill: "#9e9e9e" }, // Grey for Neutral
]

const chartConfig = {
  positive: {
    label: "Positive",
    color: "#4caf50", // Green color
  },
  negative: {
    label: "Negative",
    color: "#f44336", // Red color
  },
  neutral: {
    label: "Neutral",
    color: "#9e9e9e", // Grey color
  },
} satisfies ChartConfig

export default function DellChart() {
  return (
    <Card className="">
      <CardHeader className="items-center pb-0">
        <CardTitle>Sentiment Analysis Chart</CardTitle>
        <CardDescription>Positive, Negative, and Neutral Sentiments</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart width={800} height={800}>
            <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="sentiment"
              innerRadius={60} // Donut effect
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
