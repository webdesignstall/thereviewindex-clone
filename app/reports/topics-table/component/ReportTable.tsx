import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const topics = [
    {
      topic: "Climate Change",
      records: 120,
      positiveCount: 85,
      chartLine: "50%", // This could represent the percentage of positive feedback
      negativeCount: 35,
      impactScore: 8.7,
    },
    {
      topic: "Technology Advancement",
      records: 95,
      positiveCount: 70,
      chartLine: "60%",
      negativeCount: 25,
      impactScore: 7.9,
    },
    {
      topic: "Education Reform",
      records: 150,
      positiveCount: 120,
      chartLine: "80%",
      negativeCount: 30,
      impactScore: 9.1,
    },
    {
      topic: "Healthcare Development",
      records: 110,
      positiveCount: 90,
      chartLine: "65%",
      negativeCount: 20,
      impactScore: 8.4,
    },
    {
      topic: "Artificial Intelligence",
      records: 130,
      positiveCount: 100,
      chartLine: "75%",
      negativeCount: 30,
      impactScore: 8.2,
    },
    {
      topic: "Sustainable Energy",
      records: 90,
      positiveCount: 60,
      chartLine: "55%",
      negativeCount: 30,
      impactScore: 7.8,
    },
  ]
  
  export function ReportTable() {
    return (
      <Table>
        <TableCaption>A summary of topic discussions, feedback, and impact scores.</TableCaption>
        <TableHeader>
          <TableRow className="uppercase bg-neutral-800">
            <TableHead>Topic</TableHead>
            <TableHead>Records</TableHead>
            <TableHead>Positive Count</TableHead>
            <TableHead>Chart Line</TableHead>
            <TableHead>Negative Count</TableHead>
            <TableHead>Impact Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topic) => (
            <TableRow key={topic.topic}>
              <TableCell className="font-medium">{topic.topic}</TableCell>
              <TableCell>{topic.records}</TableCell>
              <TableCell>{topic.positiveCount}</TableCell>
              <TableCell>{topic.chartLine}</TableCell>
              <TableCell>{topic.negativeCount}</TableCell>
              <TableCell>{topic.impactScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell>{topics.reduce((sum, topic) => sum + topic.positiveCount, 0)}</TableCell>
            <TableCell></TableCell>
            <TableCell>{topics.reduce((sum, topic) => sum + topic.negativeCount, 0)}</TableCell>
            <TableCell>
              {(
                topics.reduce((sum, topic) => sum + topic.impactScore, 0) / topics.length
              ).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  