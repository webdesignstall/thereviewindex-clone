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
              <div className='flex gap-1 justify-between items-center'>
                <div className='flex'>
                  <div className='border text-md font-semibold p-2'>Dell (Brand)- Amazon US</div>
                  <div className='border text-sm font-medium'><SearchIcon size={40} className='p-2'/></div>
                  <CreateTask/>
                </div>


                <div className="md:flex items-center space-x-4">
                  <div
                          className=" whitespace-nowrap items-center justify-center gap-1 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] group relative shrink-0  rounded-md backdrop-blur-md border hover:bg-muted text-base py-2 px-4 inline-flex">
                    <div className="flex items-center"><span><svg viewBox="0 0 24 24"
                                                                  preserveAspectRatio="xMidYMid meet"
                                                                  className="h-6 w-6 p-1 mr-2"
                                                                  stroke="currentColor"
                                                                  fill="none"><path
                        strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg></span>
                      <div className="text-sm mr-2"><span>Filters</span></div>
                    </div>
                  </div>
                  <div
                          className=" whitespace-nowrap items-center justify-center gap-1 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] group relative shrink-0  rounded-md bg-primary text-primary-foreground  text-base py-2 px-4 inline-flex">
                    <div className="flex items-center"><span><svg viewBox="0 0 24 24"
                                                                  preserveAspectRatio="xMidYMid meet"
                                                                  className="h-6 w-6 p-1 mr-2"
                                                                  stroke="currentColor"
                                                                  fill="none"><path
                        strokeLinecap="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></span>
                      <div className="text-sm mr-2">
                        <div className="flex items-center">...
                          <button><span><svg viewBox="0 0 24 24"
                                             preserveAspectRatio="xMidYMid meet"
                                             className="h-6 w-6 p-1 ml-2"
                                             stroke="currentColor" fill="none"><path
                              strokeLinecap="round" strokeLinejoin="round"
                              stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div>
              <div className='flex pb-6 space-x-3'>
                <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl' variant='secondary'><span><Dot/></span>Source:
                  Amazon US</Badge>
                <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl' variant='secondary'><span><Dot/></span>Entities:
                  2247</Badge>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProductTable/>
        </div>
        <div>
          <SentimentChart/>
        </div>
      </div>
    </div>
  )
}
