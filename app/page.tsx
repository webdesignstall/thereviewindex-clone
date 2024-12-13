'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'  // Importing framer motion
import ReportCard from './component/ReportCard'
import DataSource from './component/DataSource'
import Bookmarks from './component/Bookmarks'

export default function Homepage() {
  return (
    <div className='pb-12 p-3 md:p-8'>
      <div>
        {/* Adding animation for the heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='md:py-6 py-2'>
            <h2 className="w-full font-semibold flex text-primary tracking-tight text-3xl text-left justify-start pb-2">Welcome ASIM!</h2>
            <p className='text-gray-700 w-full font-normal flex text-sm-r text-left justify-start dark:text-white'>It's always great to see you here.</p>
          </div>
        </motion.div>

        <div>
          {/* Applying slide-up animation to the components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DataSource />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Bookmarks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ReportCard />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
