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
      <div className="grid grid-cols-2 gap-10">
        <div>
          <CardHeader className="items-center hidden">
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
          </CardContent></div>
        <div>
          <div className="grid grid-cols-2 gap-6 text-gray-400 font-medium">
            <div>
              <p className="uppercase font-medium border-b-2 py-2 border-b-green-600 my-2">
                praises
              </p>
              <div>
                <p>Clarity</p>
                <p>Price</p>
                <p>Usage</p>
                <p>Easy of Use</p>
              </div>
            </div>
            <div>
              <p className="uppercase font-medium border-b-2 py-2 border-b-red-600 my-2">
                Complaints
              </p>
              <div>
                <p>Reliabiblity</p>
                <p>Flicker</p>
                <p>Marketplace</p>
                <p>Marketplace/Return</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Card>
  )
}
