import React from 'react'
import { ProductTable } from './component/ProductTable'
import WordCloudComponent from './component/WordCloud'
import ReviewVolumeChart from './component/ReviewVolumeChart'
import { CastChart } from './component/CsatChart'
import { ReviewRatingChart } from './component/ReviewReatingChart'
import SentimentBarChart from './component/TopicsChart'
import ReviewStarsBarChart from './component/ReviewStartsChart'
import TopicsTable from './component/TopicsTable'
import DellChart from './component/DellChart'







export default function BrandReport() {
    return (
        <div>
            <div>
                <div>
                    <div>Title</div>
                    <div>search</div>
                    <div>
                        <div className='grid grid-cols-3 gap-3'>
                            <div className='border h-36 rounded-md p-4'>Total Reviews</div>
                            <div className='border h-36 rounded-md p-4'>Average Review Rating</div>
                            <div className='border h-36 rounded-md p-4'>CSAT rating</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>Search</div>
                            <div>
                                <ProductTable />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='border h-36 rounded-md p-4'>Total Reviews</div>
                                <div className='border h-36 rounded-md p-4'>Average Review Rating</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div><ReviewVolumeChart /></div>
                            <div> <ReviewStarsBarChart /></div>
                            <div><CastChart /></div>
                            <div><ReviewRatingChart /></div>
                            <div><SentimentBarChart /></div>
                            <div>
                                <WordCloudComponent />
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
