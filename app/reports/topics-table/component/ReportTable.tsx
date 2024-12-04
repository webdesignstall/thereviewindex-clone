'use client'
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
import AreaChartComponent from "./AreaChart";
  
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
  
export default function ReportTable({setIsComment}  : {setIsComment?: any}) {
    return (
      <Table className='border-none'>
        <TableCaption>A summary of topic discussions, feedback, and impact scores.</TableCaption>
        <TableHeader>
          <TableRow className="uppercase bg-neutral-800">
            <TableHead>Topic</TableHead>
            <TableHead>Records</TableHead>
            <TableHead>Positive Count</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead>Negative Count</TableHead>
            <TableHead>Impact Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topic) => (
            <TableRow key={topic.topic}>
              <TableCell className="font-medium cursor-pointer" onClick={() => setIsComment(true)}>{topic.topic}</TableCell>
              <TableCell>
                <div className='flex gap-3 justify-center items-center'>
                  {topic.records}
                  <AreaChartComponent/>
                </div>

              </TableCell>
              <TableCell>{topic.positiveCount}</TableCell>
              <TableCell className={'relative'}>
                <div className="w-full truncate">
                  <div className="absolute h-full top-0 right-0" style={{width: `${topic.positiveCount}%`}}>
                    <div className="h-full" style={{backgroundColor: 'rgb(26, 174, 159)'}}></div>
                  </div>
                </div>
              </TableCell>
              <TableCell className={'relative'}>
                <div className="w-full truncate">
                  <div className="absolute h-full top-0 left-0" style={{width: `${topic.negativeCount}%`}}>
                    <div className="h-full" style={{backgroundColor: 'rgb(211, 69, 91)'}}></div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{topic.negativeCount}</TableCell>
              <TableCell>{topic.impactScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/*<TableFooter>
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
        </TableFooter>*/}
      </Table>
    )
  }
  