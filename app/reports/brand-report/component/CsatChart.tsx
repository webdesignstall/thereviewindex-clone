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

// New data for the chart
const chartData = [
  { year: "2011", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 0, Dell_U2412M: 100, Dell_E2414HM: 0 },
  { year: "2012", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 0, Dell_U2412M: 89.76, Dell_E2414HM: 0 },
  { year: "2013", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 0, Dell_U2412M: 90.7, Dell_E2414HM: 83.91 },
  { year: "2014", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 0, Dell_U2412M: 88.97, Dell_E2414HM: 90.73 },
  { year: "2015", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 95.45, Dell_U2412M: 89.87, Dell_E2414HM: 89.71 },
  { year: "2016", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 86.67, Dell_U2412M: 89.83, Dell_E2414HM: 91.49 },
  { year: "2017", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 78.42, Dell_U2412M: 88.68, Dell_E2414HM: 77.14 },
  { year: "2018", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 71.24, Dell_U2412M: 87.5, Dell_E2414HM: 91.67 },
  { year: "2019", Dell_S3423DWC: 0, Dell_S2722DGM: 0, Dell_S2716DGR: 71.43, Dell_U2412M: 87.5, Dell_E2414HM: 100 },
  { year: "2020", Dell_S3423DWC: 87.69, Dell_S2722DGM: 82.35, Dell_S2716DGR: 57.86, Dell_U2412M: 76.19, Dell_E2414HM: 0 },
  { year: "2021", Dell_S3423DWC: 65.13, Dell_S2722DGM: 82.55, Dell_S2716DGR: 37.04, Dell_U2412M: 87.5, Dell_E2414HM: 50 },
  { year: "2022", Dell_S3423DWC: 63.04, Dell_S2722DGM: 74.47, Dell_S2716DGR: 23.08, Dell_U2412M: 100, Dell_E2414HM: 0 },
  { year: "2023", Dell_S3423DWC: 60.73, Dell_S2722DGM: 70.1, Dell_S2716DGR: 55.56, Dell_U2412M: 100, Dell_E2414HM: 100 },
  { year: "2024", Dell_S3423DWC: 71.57, Dell_S2722DGM: 73.44, Dell_S2716DGR: 66.67, Dell_U2412M: 0, Dell_E2414HM: 100 },
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

export function CastChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CSAT Trend</CardTitle>
        <CardDescription className="text-4xl font-medium">78.1</CardDescription>
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
            <YAxis domain={[0, 100]} />
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
              Showing data for 5 monitors from 2011 - 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
