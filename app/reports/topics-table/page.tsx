'use client'
import React, {useState} from 'react'
import { ReportTable } from './component/ReportTable'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Dot, SearchIcon} from 'lucide-react'
import {Comment} from './component/Comment'

export default function TopicsTable() {

    const [isComment, setIsComment] = useState(false)
    
    return (
        <div>
            <div>
                <div>

                    <div className={`grid grid-cols-4 gap-3`}>
                        <div className={`${isComment ? 'col-span-3' : 'col-span-4'}`}>

                            <div className='py-2'>
                                <h2 className='text-xl font-semibold'>Topics Table {isComment ? 'Open' : 'Close'}</h2>
                            </div>
                            <div>
                                <div className='pb-4'>
                                    <div className='flex gap-1 justify-start items-center'>
                                        <div className='border text-md font-semibold p-2'>Dell (Brand)- Amazon US</div>
                                        <div className='border text-sm font-medium'><SearchIcon size={40}
                                                                                                className='p-2'/></div>
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

                            <ReportTable setIsComment={setIsComment}/>
                        </div>
                        <div className={`${isComment ? 'block border-l relative' : 'hidden'}`}>
                            <div onClick={() => setIsComment(false)} className='fixed top-14 cursor-pointer border px-3 py-2'><ArrowRight/></div>
                            <Comment/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
