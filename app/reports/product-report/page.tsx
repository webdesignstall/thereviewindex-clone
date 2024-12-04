import { Badge } from '@/components/ui/badge'
import { ChevronUp, Dot, SearchIcon } from 'lucide-react'
import React from 'react'
import TopicsChart from './component/TopicsChart'
import WordCloud from './component/WordCloud'
import CreateTask from '@/components/CreateTask'
import { ReviewRatingChart } from './component/ReviewReatingChart'
import ReviewChart from './component/ReviewStartsChart'

export default function ProductReport() {
  return (
    <div className='p-3 md:p-6 lg:p-10'>
      <div className='py-2'>
        <h2 className='text-xl font-semibold'>Product Report</h2>
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
      <div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
          <div className='border rounded-md p-4'>
            <div>
              <div className='text-md font-medium pb-4'>Total Reviews</div>
              <div className='text-4xl font-semibold pb-2'>73</div>
              <div className='flex justify-between items-center'>
                <Badge className='text-green-600 justify-start items-start' variant='secondary'><span><ChevronUp size={15} /></span>100%</Badge>
                <div className='text-sm text-gray-400'>Previous Period</div>
              </div>
            </div>
          </div>
          <div className='border h-36 rounded-md p-4'>
            <div>
              <div className='text-md font-medium pb-4'>Average Review Rating</div>
              <div className='text-4xl font-semibold pb-2'>4.2</div>
            </div>
          </div>
          <div className='border h-36 rounded-md p-4'>
            <div>
              <div className='text-md font-medium pb-4'>CSAT rating</div>
              <div className='text-4xl font-semibold pb-2'>78.1</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='grid lg:grid-cols-2 gap-4 grid-col-1'>
          <div>
            <ReviewRatingChart />
          </div>
          <div>
            <ReviewChart />
          </div>
          <div>
            <TopicsChart />
          </div>
          <div>
            <WordCloud />
          </div>
        </div>
      </div>
    </div>
  )
}
