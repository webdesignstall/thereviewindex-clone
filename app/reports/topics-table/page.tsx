'use client'
import React, { useState } from 'react'
import ReportTable from './component/ReportTable'
import { Badge } from '@/components/ui/badge'
import {ChevronLeft, Dot, SearchIcon} from 'lucide-react'

import TableSidebar from './component/TableSidebar'
import CreateTask from '@/components/CreateTask'

export default function TopicsTable() {

    const [isComment, setIsComment] = useState(false)

    return (
        <div>
            <div>
                <div>

                    <div className={`grid grid-cols-4 gap-3`}>
                        <div className={`${isComment ? 'col-span-3' : 'col-span-4'} p-8`}>

                            <div className='py-2'>
                                <h2 className='text-xl font-semibold'>Topics Table</h2>
                            </div>
                            <div>
                                <div className='pb-4'>
                                    <div className='flex gap-1 justify-between items-center'>

                                        <div className='flex'>
                                            <div className='border text-md font-semibold p-2'>Dell (Brand)- Amazon US
                                            </div>
                                            <div className='border text-sm font-medium'><SearchIcon size={40}
                                                                                                    className='p-2'/>
                                            </div>
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
                                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
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
                                                    strokeLinecap="round" strokeWidth="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></span>
                                                    <div className="text-sm mr-2">
                                                        <div className="flex items-center">...
                                                            <button><span><svg viewBox="0 0 24 24"
                                                                               preserveAspectRatio="xMidYMid meet"
                                                                               className="h-6 w-6 p-1 ml-2"
                                                                               stroke="currentColor" fill="none"><path
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></span>
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
                                        <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl'
                                               variant='secondary'><span><Dot/></span>Source: Amazon US</Badge>
                                        <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl'
                                               variant='secondary'><span><Dot/></span>Entities: 2247</Badge>
                                    </div>
                                </div>
                            </div>
                            <div className='border'>
                                <div className="flex justify-between p-2 border-b">
                                    <div className="border  rounded-md px-2">
                                        <div className="flex-1 flex">
                                            <form className="w-full flex md:ml-0"><label htmlFor="search_field"
                                                                                         className="sr-only">Search</label>
                                                <div
                                                    className="relative w-full text-muted-foreground focus-within:text-primary">
                                                    <div
                                                        className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                                    <span><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                                                               className="h-5 w-5" stroke="currentColor" fill="none"><path
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></span>
                                                    </div>
                                                    <input
                                                        autoComplete="off"
                                                        id="search_field"
                                                        className="bg-transparent border-transparent focus:border-transparent focus:ring-transparent block w-full h-full pl-8 pr-3 py-2 rounded-md text-primary placeholder:text-muted-foreground sm:text-sm"
                                                        placeholder="Search"
                                                        type="text"
                                                        defaultValue=""
                                                    />


                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mx-6">
                                        <div>
                                        <div className="hidden md:block print:hidden">
                                                <div className="focus:outline-none  cursor-pointer w-fit">
                                                    <div className="relative min-w-0 ">
                                                        <div className=" max-w-full truncate h-full">
                                                            <button type="submit"
                                                                    className=" whitespace-nowrap items-center justify-center gap-1 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] group relative shrink-0  rounded-md hover:bg-muted  h-8 w-8 inline-flex">
                                                            <span><svg viewBox="0 0 24 24"
                                                                       preserveAspectRatio="xMidYMid meet"
                                                                       className="cursor-pointer h-6 w-6 text-gray-600 dark:text-gray-500 "
                                                                       stroke="currentColor" fill="none"><path
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ReportTable setIsComment={setIsComment}/>
                            </div>

                        </div>
                        <div className={`${isComment ? 'block border-l relative' : 'hidden'}`}>

                            <div onClick={() => setIsComment(false)}
                                className={`fixed top-14 cursor-pointer`}>
                                <ChevronLeft
                                    className={`border bg-neutral-50 dark:bg-neutral-700 top-4 rounded-l-2xl w-10 text-gray-700  dark:text-gray-50 duration-200 rotate-180`}
                                    size={30}/>
                            </div>

                            <TableSidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
