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
  { topic: "Climate Change 1", records: 120, positiveCount: 85, chartLine: "50%", negativeCount: 35, impactScore: 8.7, topicValue: 40 },
  { topic: "Technology Advancement 2", records: 95, positiveCount: 70, chartLine: "60%", negativeCount: 25, impactScore: 7.9, topicValue: 35 },
  { topic: "Education Reform 3", records: 150, positiveCount: 120, chartLine: "80%", negativeCount: 30, impactScore: 9.1, topicValue: 30 },
  { topic: "Healthcare Development 4", records: 110, positiveCount: 90, chartLine: "65%", negativeCount: 20, impactScore: 8.4 , topicValue: 36 },
  { topic: "Artificial Intelligence 5", records: 130, positiveCount: 100, chartLine: "75%", negativeCount: 30, impactScore: 8.2 , topicValue: 38 },
  { topic: "Sustainable Energy 6", records: 90, positiveCount: 60, chartLine: "55%", negativeCount: 30, impactScore: 7.8 , topicValue: 42 },
  { topic: "Climate Change 7", records: 125, positiveCount: 90, chartLine: "52%", negativeCount: 35, impactScore: 8.8 , topicValue: 46 },
  { topic: "Technology Advancement 8", records: 100, positiveCount: 72, chartLine: "61%", negativeCount: 28, impactScore: 8.0 , topicValue: 33 },
  { topic: "Education Reform 9", records: 155, positiveCount: 125, chartLine: "83%", negativeCount: 30, impactScore: 9.2 , topicValue: 30 },
  { topic: "Healthcare Development 10", records: 115, positiveCount: 95, chartLine: "68%", negativeCount: 20, impactScore: 8.5 , topicValue: 28 },
  { topic: "Artificial Intelligence 11", records: 135, positiveCount: 105, chartLine: "77%", negativeCount: 30, impactScore: 8.3 , topicValue: 34 },
  { topic: "Sustainable Energy 12", records: 95, positiveCount: 62, chartLine: "57%", negativeCount: 33, impactScore: 7.9 , topicValue: 30 },
  { topic: "Climate Change 13", records: 130, positiveCount: 92, chartLine: "54%", negativeCount: 38, impactScore: 8.9 , topicValue: 40 },
  { topic: "Technology Advancement 14", records: 105, positiveCount: 75, chartLine: "63%", negativeCount: 30, impactScore: 8.1 , topicValue: 39 },
  { topic: "Education Reform 15", records: 160, positiveCount: 130, chartLine: "85%", negativeCount: 30, impactScore: 9.3 , topicValue: 41 },
  { topic: "Healthcare Development 16", records: 120, positiveCount: 97, chartLine: "69%", negativeCount: 23, impactScore: 8.6 , topicValue: 35 },
  { topic: "Artificial Intelligence 17", records: 140, positiveCount: 10, chartLine: "78%", negativeCount: 30, impactScore: 8.4 , topicValue: 39 },
  { topic: "Sustainable Energy 18", records: 100, positiveCount: 65, chartLine: "58%", negativeCount: 35, impactScore: 8.0 , topicValue: 32 },
  { topic: "Climate Change 19", records: 135, positiveCount: 95, chartLine: "55%", negativeCount: 40, impactScore: 9.0 , topicValue: 37 },
  { topic: "Technology Advancement 20", records: 110, positiveCount: 80, chartLine: "65%", negativeCount: 30, impactScore: 8.2 , topicValue: 31 },
];
  
export default function ReportTable({setIsComment}  : {setIsComment?: any}) {
    return (
      <Table>
        <TableCaption>A summary of topic discussions, feedback, and impact scores.</TableCaption>
        <TableHeader>
          <TableRow className="uppercase bg-neutral-100 dark:bg-neutral-800">
            <TableHead className='border-r border-r-gray-300 dark:border-r-neutral-700'>Topic</TableHead>
            <TableHead className='border-r border-r-gray-300 dark:border-r-neutral-700'>Records</TableHead>
            <TableHead className='border-r border-r-gray-300 dark:border-r-neutral-700'>Positive Count</TableHead>
            <TableHead className='border-r border-r-gray-300 dark:border-r-neutral-700'></TableHead>
            <TableHead className='border-r border-r-gray-300 dark:border-r-neutral-700'></TableHead>
            <TableHead className='border-r border-r-gray-300 dark:border-r-neutral-700'>Negative Count</TableHead>
            <TableHead>Impact Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topic) => (
            <TableRow key={topic.topic}>
              <TableCell className="font-medium cursor-pointer border-r" onClick={() => setIsComment(true)}>{topic.topic}</TableCell>
              <TableCell>
                <div className='flex gap-3 justify-center items-center'>
                  {topic.records}
                  <AreaChartComponent topic={topic?.topicValue}/>
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
      </Table>
    )
  }
  