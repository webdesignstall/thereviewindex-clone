import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PlanChart } from './PlanChart'

export default function DataSource() {
    return (
        <div>
            <div className='md:flex  max-w-7xl my-10'>
                <div className='w-full max-w-4xl md:mr-10'>
                    <div className='border  rounded-md flex flex-col h-full '>
                        <div className='w-full h-full flex flex-col overflow-auto'>
                            <div className='md:px-5 px-3 flex justify-between '>
                                <div className='flex flex-col w-full space-y-2 md:p-6 p-4 justify-start items-start text-left'>
                                    <div>
                                        <span>
                                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="h-10 w-10 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path></svg>
                                        </span>
                                    </div>
                                    <div className='space-y-1'>
                                        <div className=' text-xl font-semibold text-black dark:text-white'>
                                            Create Data Sources
                                        </div>
                                        <div className=' text-sm text-gray-700 dark:text-gray-300'>
                                            You can upload CSVs, integrate with various connectors or add product or search URLs from enabled channels (such as Amazon.com).
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <a className='link-blue flex items-center text-sm text-blue-700' href="">Learn More <span><ChevronRight /></span></a>
                                    </div>
                                    <div className='flex flex-col gap-4 md:flex-row-reverse'>
                                        <Button size='sm' className='font-semibold'>
                                            Create Data Source +
                                        </Button>
                                    </div>
                                </div>
                                <div className=' hidden lg:block relative my-auto'>
                                    <Image
                                        width={400}
                                        height={400}
                                        src='/isometric_colored_elevated.svg'
                                        alt='data resource'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-md min-w-max'>
                    <div className='relative w-full h-full border  rounded-md overflow-auto px-4 py-5 sm:p-5 '>
                        <div className='flex flex-col divide-y divide-primar dark:divide-gray-700'>
                            <div className=' text-center md:py-6 py-2'>
                                <div className='flex w-full h-full items-center'>
                                    <div className='m-auto'>
                                        <div className='header-gray mb-1 dark:text-gray-300 uppercase text-sm'> Current Plan</div>
                                        <div className='mb-1 header-3 scroll-m-20 text-2xl font-semibold tracking-tight'>Trial</div>
                                    </div>
                                </div>
                            </div>
                            <div className='py-2'>
                                <div className=''>
                                    <PlanChart />
                                </div>
                                <div>
                                    <div className="ml-8 grid grid-cols-2 gap-2 text-sm">
                                        <div className="text-gray-600 font-medium tracking-wider dark:text-gray-500 float-right">
                                            <div>Total Monthly Quota</div></div><div className="text-black dark:text-white">
                                            <div>3</div></div>
                                        <div className="text-gray-600 font-medium tracking-wider dark:text-gray-500 float-right">
                                            <div>Quota Used</div></div><div className="text-black dark:text-white">
                                            <div>0</div>
                                        </div>
                                        <div className="text-gray-600 font-medium tracking-wider dark:text-gray-500 float-right">
                                            <div>Quota Pending</div></div><div className="text-black dark:text-white">
                                            <div>3</div></div><div className="text-gray-600 font-medium tracking-wider dark:text-gray-500 float-right">
                                            <div>Quota Expire On</div></div><div className="text-black dark:text-white">
                                            <div>December 4, 2024</div></div></div>
                                </div>
                            </div>
                            <div className='py-3 flex justify-center items-center'>
                                <Button size='sm' className='font-semibold'>Manage</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
