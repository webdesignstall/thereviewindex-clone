"use client"

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tableData = [
  {
    trendingTopic: "Product A",
    records: 120,
    positiveCount: 80,
    negativeCount: 40,
    csat: "85%",
  },
  {
    trendingTopic: "Product B",
    records: 150,
    positiveCount: 100,
    negativeCount: 50,
    csat: "83%",
  },
  {
    trendingTopic: "Product C",
    records: 100,
    positiveCount: 60,
    negativeCount: 40,
    csat: "80%",
  },
  {
    trendingTopic: "Product D",
    records: 200,
    positiveCount: 150,
    negativeCount: 50,
    csat: "90%",
  },
  {
    trendingTopic: "Product E",
    records: 180,
    positiveCount: 120,
    negativeCount: 60,
    csat: "84%",
  },
]

export default function TopicsTable() {
  return (
    <Table>
      <TableCaption>A list of recent trending topics and their sentiment analysis.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Trending Topic</TableHead>
          <TableHead>Records</TableHead>
          <TableHead>Positive Count</TableHead>
          <TableHead>Negative Count</TableHead>
          <TableHead>CSAT</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow key={row.trendingTopic}>
            <TableCell>{row.trendingTopic}</TableCell>
            <TableCell>{row.records}</TableCell>
            <TableCell>{row.positiveCount}</TableCell>
            <TableCell>{row.negativeCount}</TableCell>
            <TableCell>{row.csat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Records</TableCell>
          <TableCell className="text-right">{tableData.reduce((acc, curr) => acc + curr.records, 0)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
