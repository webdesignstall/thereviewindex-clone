import React from 'react'
import SentimentChart from './component/ValueChart'
import { Badge } from '@/components/ui/badge'
import { Dot, SearchIcon } from 'lucide-react'
import ReportTable from '../topics-table/component/ReportTable'
import { ProductTable } from './component/SentimentTable'
import CreateTask from '@/components/CreateTask'

export default function Sentiment() {
  return (
    <div className='p-3 md:p-6 lg:px-10 lg:py-4'>
      <div>
        <div>
          <div className='py-2'>
            <h2 className='text-xl font-semibold'>Sentiment-Volume Report</h2>
          </div>
          <div>
            <div className='pb-4'>
              <div className='flex gap-1 justify-start items-center'>
                <div className='border text-md font-semibold p-2'>Dell (Brand)- Amazon US</div>
                <div className='border text-sm font-medium'><SearchIcon size={40} className='p-2' /></div>
                <CreateTask />
              </div>
            </div>
            <div>
              <div className='flex pb-6 space-x-3'>
                <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl' variant='secondary'><span><Dot /></span>Source: Amazon US</Badge>
                <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl' variant='secondary'><span><Dot /></span>Entities: 2247</Badge>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProductTable />
        </div>
        <div>
          <SentimentChart />
        </div>
      </div>
    </div>
  )
}
