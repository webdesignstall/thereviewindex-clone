import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import ReportCard from './component/ReportCard'
import DataSource from './component/DataSource'
import Bookmarks from './component/Bookmarks'

export default function Homepage() {
  return (
    <div>
      <div>
        <div className='py-6'>
          <h2 className=" w-full font-semibold flex text-primary tracking-tight  text-xl-r text-left justify-start">Welcome ASIM!</h2>
          <p className=' text-secondary w-full font-normal flex text-sm-r text-left justify-start dark:text-white'>Its alawats grat to see you hear.</p>
        </div>

        <DataSource />
        <Bookmarks />
        <ReportCard />

      </div>
    </div>
  )
}
