import { Input } from '@/components/ui/input'
import { Dot, HelpCircle, SearchIcon } from 'lucide-react'
import React from 'react'
import { Comment } from './component/Comment'
import { TrendChart } from './component/TrendChart'
import { Badge } from '@/components/ui/badge'

export default function Search() {
  return (
    <div className='max-w-screen-2xl m-auto'>
      <div className='pb-6'>
        <div className='flex gap-1 justify-start items-center'>
          <div className='border text-md font-semibold p-2'>Dell (Brand)- Amazon US</div>
          <div className='border text-sm font-medium'><SearchIcon size={40} className='p-2' /></div>
        </div>
      </div>

      <div>
        <div className='flex pb-6 space-x-3'>
          <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl' variant='secondary'><span><Dot /></span>Source: Amazon US</Badge>
          <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl' variant='secondary'><span><Dot /></span>Entities</Badge>
        </div>
      </div>


      <div className=''>
        <div className='border'>
          <div className='flex justify-center items-center border py-2'>
            <div className='flex flex-1 justify-center items-center'>
              <SearchIcon className='mx-2' />
              <Input className='border-none focus-visible:ring-0' placeholder='Search' />
            </div>
            <div className='px-6'>
              <HelpCircle />
            </div>
          </div>
          <div className='grid grid-cols-3'>
            <div className='border-r lg:col-span-2 col-span-3'>
              <Comment />
            </div>
            <div className='col-span-3 lg:col-span-1'>
              <div className='grid grid-cols-3 p-2'>
                <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                  <p className='text-sm text-gray-400'>POSITIVE</p>
                  <p>1500</p>
                </div>
                <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                  <p className='text-sm text-gray-400'>POSITIVE</p>
                  <p>1500</p>
                </div>
                <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                  <p className='text-sm text-gray-400'>POSITIVE</p>
                  <p>1500</p>
                </div>
                <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                  <p className='text-sm text-gray-400'>POSITIVE</p>
                  <p>1500</p>
                </div>
                <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                  <p className='text-sm text-gray-400'>POSITIVE</p>
                  <p>1500</p>
                </div>
              </div>
              <div>
                <TrendChart />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
