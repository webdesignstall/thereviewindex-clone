import React from 'react'
import { ProductTable } from './component/ProductTable'
import ReviewVolumeChart from './component/ReviewVolumeChart'
import { CastChart } from './component/CsatChart'
import { ReviewRatingChart } from './component/ReviewReatingChart'
import ReviewStarsBarChart from './component/ReviewStartsChart'
import TopicsTable from './component/TopicsTable'
import DellChart from './component/DellChart'
import { ArrowUp, ChevronUp, Dot, Download, Search, SearchIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import WordCloud from './component/WordCloud'
import { CreateBrand } from './component/CreateBrand'
import CreateTask from '@/components/CreateTask'
import TopicsChartComponent from "@/app/reports/brand-report/component/TopicsChartComponent";









export default function BrandReport() {
    const wordData = [
        { text: 'Next.js', value: 1000 },
        { text: 'React', value: 900 },
        { text: 'JavaScript', value: 850 },
        { text: 'CSS', value: 700 },
        { text: 'HTML', value: 650 },
        { text: 'API', value: 600 },
        { text: 'Web Development', value: 500 },
        { text: 'Design', value: 400 },
        { text: 'Performance', value: 300 },
        { text: 'SEO', value: 200 },
    ];

    return (
        <div className='p-3 md:p-6 lg:p-10'>
            <div>
                <div>
                    <div className='py-2'>
                        <h2 className='text-xl font-semibold'>Brand Report</h2>
                    </div>
                    <div>
                        <div className='pb-4'>
                            <div className='flex gap-1 justify-between items-center'>
                                <div className="flex">
                                    <div className='border text-md font-semibold p-2'>Dell (Brand)- Amazon US</div>
                                    <div className='border text-sm font-medium'><SearchIcon size={40} className='p-2'/>
                                    </div>
                                    <CreateTask/>
                                </div>


                                <div className="md:flex items-center space-x-4">
                                    <div
                                            className=" whitespace-nowrap items-center justify-center gap-1 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] group relative shrink-0  rounded-md backdrop-blur-md border hover:bg-muted text-base py-2 px-4 inline-flex">
                                        <div className="flex items-center">
                                            <span><svg viewBox="0 0 24 24"
                                                                                      preserveAspectRatio="xMidYMid meet"
                                                                                      className="h-6 w-6 p-1 mr-2"
                                                                                      stroke="currentColor"
                                                                                      fill="none"><path
                                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg></span>

                                            <div className="text-sm mr-2">
                                                <span>Filters</span>
                                            </div>
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
                    <div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
                            <div className='border rounded-md p-4'>
                                <div>
                                    <div className='text-md font-medium pb-4'>Total Reviews</div>
                                    <div className='text-4xl font-semibold pb-2'>34,442</div>
                                    <div className='flex justify-between items-center'>
                                        <Badge className='text-green-600 justify-start items-start' variant='secondary'><span><ChevronUp
                                            size={15}/></span>100%</Badge>
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
                                    <span className='absolute top-5 left-6'><Search className='text-gray-300'/></span>
                                    <Input type='search' placeholder='Search' className='pl-12 focus-visible:ring-0'/>
                                </div>
                                <div className='mx-4'>
                                    <Download/>
                                </div>
                            </div>
                            <div>
                                <ProductTable/>
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
                            <div><TopicsChartComponent /></div>
                            <div className={'h-[480px]'}>
                                <WordCloud />
                            </div>
                            <div className='col-span-2'>
                                {/* <TopicsTable /> */}
                            </div>
                            <div className='col-span-2'>

                                <div className=" border  rounded-md ">
                                    <div
                                        className="flex justify-between items-center border-b px-3 py-5 bg-muted text-muted-foreground">
                                        Dell Curved Gaming Monitor 27 Inch Curved with 165Hz Refresh Rate, QHD Display, Black - S2722DGM - Amazon US
                                        <div className="ml-6 flex-shrink-0">1826 records</div>
                                    </div>
                                    <div className="md:flex md:items-center p-5">
                                        <div>
                                            <DellChart/>
                                        </div>
                                        <div className="flex w-full">
                                            <div className="mr-6 w-1/2">
                                                <div>
                                                    <div
                                                        className="pb-2 mb-2 border-b text-sm text-gray-600 dark:text-gray-500 border-green-500">PRAISES
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            className="text-gray-800 dark:text-gray-500 cursor-pointer text-left hover:bg-gray-100 dark:hover:bg-gray-800 w-full">Clarity
                                                        </button>
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            className="text-gray-800 dark:text-gray-500 cursor-pointer text-left hover:bg-gray-100 dark:hover:bg-gray-800 w-full">Price
                                                        </button>
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            className="text-gray-800 dark:text-gray-500 cursor-pointer text-left hover:bg-gray-100 dark:hover:bg-gray-800 w-full">Usage
                                                        </button>
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            className="text-gray-800 dark:text-gray-500 cursor-pointer text-left hover:bg-gray-100 dark:hover:bg-gray-800 w-full">Ease
                                                            of Use
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2">
                                                <div>
                                                    <div
                                                        className="pb-2 mb-2 border-b text-sm text-gray-600 dark:text-gray-500 border-red-500">COMPLAINTS
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            className="text-gray-800 dark:text-gray-500 cursor-pointer text-left hover:bg-gray-100 dark:hover:bg-gray-800 w-full">Reliability
                                                        </button>
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            className="text-gray-800 dark:text-gray-500 cursor-pointer text-left hover:bg-gray-100 dark:hover:bg-gray-800 w-full">"flicker"
                                                        </button>
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            className="text-gray-800 dark:text-gray-500 cursor-pointer text-left hover:bg-gray-100 dark:hover:bg-gray-800 w-full">Marketplace
                                                        </button>
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            className="text-gray-800 dark:text-gray-500 cursor-pointer text-left hover:bg-gray-100 dark:hover:bg-gray-800 w-full">Marketplace
                                                            / Returns
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


