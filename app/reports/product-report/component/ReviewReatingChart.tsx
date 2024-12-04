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

// New data for the chart (updated with your values)
const chartData = [
  { year: "2011", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 0, Dell_U2412M: 5, Dell_E2414HM: 0 },
  { year: "2012", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 0, Dell_U2412M: 4.54, Dell_E2414HM: 0 },
  { year: "2013", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 0, Dell_U2412M: 4.59, Dell_E2414HM: 4.32 },
  { year: "2014", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 0, Dell_U2412M: 4.51, Dell_E2414HM: 4.5 },
  { year: "2015", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 4.61, Dell_U2412M: 4.52, Dell_E2414HM: 4.55 },
  { year: "2016", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 4.43, Dell_U2412M: 4.59, Dell_E2414HM: 4.63 },
  { year: "2017", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 4.2, Dell_U2412M: 4.49, Dell_E2414HM: 4.23 },
  { year: "2018", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 4.01, Dell_U2412M: 4.5, Dell_E2414HM: 4.67 },
  { year: "2019", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 3.93, Dell_U2412M: 4.5, Dell_E2414HM: 4.71 },
  { year: "2020", Dell_S3423DWC: 4.48, Dell_S2722DGM: 4.36, Dell_S2716DGR: 3.49, Dell_U2412M: 4.14, Dell_E2414HM: 0 },
  { year: "2021", Dell_S3423DWC: 3.74, Dell_S2722DGM: 4.3, Dell_S2716DGR: 2.78, Dell_U2412M: 4.5, Dell_E2414HM: 3 },
  { year: "2022", Dell_S3423DWC: 3.6, Dell_S2722DGM: 4.02, Dell_S2716DGR: 2.54, Dell_U2412M: 5, Dell_E2414HM: 0 },
  { year: "2023", Dell_S3423DWC: 3.57, Dell_S2722DGM: 3.93, Dell_S2716DGR: 3.44, Dell_U2412M: 5, Dell_E2414HM: 5 },
  { year: "2024", Dell_S3423DWC: 3.87, Dell_S2722DGM: 4.02, Dell_S2716DGR: 4.33, Dell_U2412M: 0, Dell_E2414HM: 5 },
]

const chartConfig: ChartConfig = {
  Dell_S3423DWC: {
    label: "Dell S3423DWC",
    color: "hsl(var(--chart-1))",
  },
  Dell_S2722DGM: {
    label: "Dell S2722DGM",
    color: "hsl(var(--chart-2))",
  },
  Dell_S2716DGR: {
    label: "Dell S2716DGR",
    color: "hsl(var(--chart-3))",
  },
  Dell_U2412M: {
    label: "Dell U2412M",
    color: "hsl(var(--chart-4))",
  },
  Dell_E2414HM: {
    label: "Dell E2414HM",
    color: "hsl(var(--chart-5))",
  },
}

export function ReviewRatingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Rating Trend</CardTitle>
        <CardDescription className="text-4xl font-medium">4.2</CardDescription>
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
            <YAxis domain={[0, 5]} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Legend />

            {/* Multiple lines for different monitors */}
            {Object.keys(chartConfig).map((category) => (
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
              Showing data for 5 Dell monitors from 2011 - 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
