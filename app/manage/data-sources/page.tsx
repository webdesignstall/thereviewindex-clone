import React from 'react'
import { Button } from '@/components/ui/button'
import { CreateData } from './component/CreateData'

export default function Manage() {
    return (
        <div className='pt-8 md:pt-3'>
            <div className='pb-12'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='md:text-2xl text-lg font-semibold'>Data Sources</p>
                    </div>
                    <div>
                        <CreateData />
                    </div>
                </div>
            </div>
            <div className="border  rounded-md flex flex-col h-full ">
                <div className="w-full h-full flex flex-col overflow-auto">
                    <div className="h-full flex items-center">
                        <div className="flex flex-col w-full space-y-2 md:p-6 px-2 py-4 justify-center items-center text-center">
                            <div>
                                <span>
                                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="h-10 w-10 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125">
                                    </path>
                                    </svg>
                                </span>
                            </div>
                            <div className="space-y-2">
                                <div className=" text-xl font-semibold text-black dark:text-white">No Data Sources</div>
                                <div className=" text-sm text-gray-700 dark:text-gray-300">Add Product or Search URLs from enabled channels to get started.</div>
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row-reverse">
                                <Button size='sm' className='font-semibold'>Create Data Source +</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
