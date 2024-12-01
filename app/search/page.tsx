import { Input } from '@/components/ui/input'
import { HelpCircle, SearchIcon } from 'lucide-react'
import React from 'react'
import { Comment } from './component/Comment'

export default function Search() {
  return (
    <div className='max-w-screen-2xl m-auto'>
      <div className='pb-6'>
        <div className='flex gap-1 justify-start items-center'>
          <div className='border text-md font-semibold p-2'>Dell (Brand)- Amazon US</div>
          <div className='border text-sm font-medium'><SearchIcon size={40} className='p-2' /></div>
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
            <div className='border-r col-span-2'>
              <Comment />
            </div>
            <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
