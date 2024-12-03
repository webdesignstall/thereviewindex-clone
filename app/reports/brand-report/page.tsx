import React from 'react'
import { ProductTable } from './component/ProductTable'
// import WordCloudComponent from './component/WordCloud'
import ReviewVolumeChart from './component/ReviewVolumeChart'
import { CastChart } from './component/CsatChart'
import { ReviewRatingChart } from './component/ReviewReatingChart'
import SentimentBarChart from './component/TopicsChart'
import ReviewStarsBarChart from './component/ReviewStartsChart'
import TopicsTable from './component/TopicsTable'
import DellChart from './component/DellChart'
import { ArrowUp, ChevronUp, Dot, Download, Search, SearchIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'







export default function BrandReport() {
    return (
        <div>
            <div>
                <div>
                    <div className='py-2'>
                        <h2 className='text-xl font-semibold'>Brand Report</h2>
                    </div>
                    <div>
                        <div className='pb-4'>
                            <div className='flex gap-1 justify-start items-center'>
                                <div className='border text-md font-semibold p-2'>Dell (Brand)- Amazon US</div>
                                <div className='border text-sm font-medium'><SearchIcon size={40} className='p-2' /></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex pb-6 space-x-3'>
                                <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl' variant='secondary'><span><Dot /></span>Source: Amazon US</Badge>
                                <Badge className='flex justify-start p-0 pr-2 items-center rounded-xl' variant='secondary'><span><Dot /></span>Entities: 2247</Badge>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
                            <div className='border rounded-md p-4'>
                                <div>
                                    <div className='text-md font-medium pb-4'>Total Reviews</div>
                                    <div className='text-4xl font-semibold pb-2'>34,442</div>
                                    <div className='flex justify-between items-center'>
                                        <Badge className='text-green-600 justify-start items-start' variant='secondary'><span><ChevronUp size={15} /></span>100%</Badge>
                                        <div className='text-sm text-gray-400'>Previous Period</div>
                                    </div>
                                </div>
                            </div>
                            <div className='border h-36 rounded-md p-4'>
                                <div>
                                    <div className='text-md font-medium pb-4'>Average Review Rating</div>
                                    <div className='text-4xl font-semibold pb-2'>4.2</div>
                                </div>
                            </div>
                            <div className='border h-36 rounded-md p-4'>
                                <div>
                                    <div className='text-md font-medium pb-4'>CSAT rating</div>
                                    <div className='text-4xl font-semibold pb-2'>78.1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mt-4'>
                            <div className='border p-3 relative flex justify-between items-center'>
                                <div className=''>
                                    <span className='absolute top-5 left-6'><Search className='text-gray-300' /></span>
                                    <Input type='search' placeholder='Search' className='pl-12 focus-visible:ring-0' />
                                </div>
                                <div className='mx-4'>
                                    <Download />
                                </div>
                            </div>
                            <div>
                                <ProductTable />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='py-4'>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='border h-36 rounded-md p-4'>
                                    <div>
                                        <div className='text-md font-medium pb-4'>CSAT Trend</div>
                                        <div className='text-4xl font-semibold pb-2'>4.2</div>
                                    </div>
                                </div>
                                <div className='border h-36 rounded-md p-4'>
                                    <div>
                                        <div className='text-md font-medium pb-4'>Review Rative Trend</div>
                                        <div className='text-4xl font-semibold pb-2'>4.2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='lg:grid lg:grid-cols-2 grid-cols-1 gap-4'>
                            <div><ReviewVolumeChart /></div>
                            <div> <ReviewStarsBarChart /></div>
                            <div><CastChart /></div>
                            <div><ReviewRatingChart /></div>
                            <div><SentimentBarChart /></div>
                            <div>
                                {/* <WordCloudComponent /> */}
                            </div>
                            <div className='col-span-2'>
                                <TopicsTable />
                            </div>
                            <div className='col-span-2'>
                                <DellChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
