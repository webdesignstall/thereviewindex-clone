"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Simulating demo data for reviews from 2005-2024 with ratings from 1-5 stars, count range: 0-5k
const chartData = Array.from({ length: 20 }, (_, i) => {
  const year = 2005 + i
  return {
    year: year.toString(),
    "1_star": Math.floor(Math.random() * 5001),
    "2_star": Math.floor(Math.random() * 5001),
    "3_star": Math.floor(Math.random() * 5001),
    "4_star": Math.floor(Math.random() * 5001),
    "5_star": Math.floor(Math.random() * 5001),
  }
})

// Chart configuration (optional customization, such as colors, labels, etc.)
const chartConfig = {
  "1_star": {
    label: "1 Star",
    color: "#ff6347", // Tomato
  },
  "2_star": {
    label: "2 Stars",
    color: "#ffcc00", // Yellow
  },
  "3_star": {
    label: "3 Stars",
    color: "#32cd32", // LimeGreen
  },
  "4_star": {
    label: "4 Stars",
    color: "#1e90ff", // DodgerBlue
  },
  "5_star": {
    label: "5 Stars",
    color: "#8a2be2", // BlueViolet
  },
}

export default function ReviewStarsBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Stars Split - 2005 to 2024</CardTitle>
        <CardDescription>Yearly Review Count (0-5000)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            width={800}
            height={400}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip cursor={false} content={<ChartTooltipContent />} />
            <Legend />

            {/* Bars for Different Star Ratings */}
            <Bar dataKey="1_star" fill={chartConfig["1_star"].color} />
            <Bar dataKey="2_star" fill={chartConfig["2_star"].color} />
            <Bar dataKey="3_star" fill={chartConfig["3_star"].color} />
            <Bar dataKey="4_star" fill={chartConfig["4_star"].color} />
            <Bar dataKey="5_star" fill={chartConfig["5_star"].color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing review data for stars 1-5 from 2005 - 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
