import React from 'react'

export default function Catalog() {
  return (
    <div className='p-3 md:p-6 lg:p-10'>
      <div>
        <div className='py-4'>
          <p className='text-2xl font-semibold'>Manage Catalog</p>
        </div>
        <div className='mt-8 border p-8 max-w-7xl m-auto'>
          <div>
            <p className='text-md text-neutral-300 uppercase pb-6'>Catalog task status</p>
            <div className='flex space-x-6'>
              <p className='font-medium'>The last catalog change task has been completed successfully.</p>
              <p className='bg-green-600 text-white px-2'>Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
