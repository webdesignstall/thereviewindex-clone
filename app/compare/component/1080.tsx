'use client'

import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { value: 80 },
  { value: 20 },
];

export default function StraightLineChart() {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={chartData}>
        <CartesianGrid vertical={false} />
        <Tooltip cursor={false} />
        <Line
          dataKey="value"
          type="linear" // Straight line
          stroke="#FF0000" // Red color for 80% (first data point)
          strokeWidth={3}
          dot={false}
        />
        <Line
          dataKey="value"
          type="linear" // Straight line
          stroke="#00FF00" // Green color for 20% (second data point)
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
