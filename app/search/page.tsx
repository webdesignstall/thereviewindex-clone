import { Input } from '@/components/ui/input'
import { HelpCircle, SearchIcon } from 'lucide-react'
import React from 'react'

export default function Search() {
  return (
    <div>
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
          <div className='p-2 w-full grid grid-cols-10'>
            <div className='flex justify-center items-center col-span-7 border-r-2'>
              <div className='border p-4 w-44 bg-neutral-900'>All</div>
              <div className='border p-4 w-44 bg-neutral-900'>Positive</div>
              <div className='border p-4 w-44 bg-neutral-900'>Negative</div>
            </div>
            <div className=''>
              <div className='flex justify-center items-center col-span-3'>
                <div className='border p-4 w-44 bg-neutral-900 text-center'>All</div>
                <div className='border p-4 w-44 bg-neutral-900 text-center'>Positive</div>
                <div className='border p-4 w-44 bg-neutral-900 text-center'>Negative</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
