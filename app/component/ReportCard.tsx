import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'

export default function ReportCard() {
    return (
        <>
            <div className='grid lg:grid-cols-3 border p-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6'>
                {
                    [1, 2, 3, 4,5].map((_,index) => (
                        <div key={index} className='border rounded-lg overflow-hidden'>
                            <div className=''>
                                <div className='W-44 h-48 bg-gray-400'>

                                </div>
                                <div className='p-2'>
                                    <div className='py-3 pb-8'>
                                        <p className='text-xl font-semibold pb-2'>Title (Demo)</p>
                                        <Badge>Smart phone</Badge>
                                    </div>
                                    <div>
                                        <Link href='#'>See demo Report</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
