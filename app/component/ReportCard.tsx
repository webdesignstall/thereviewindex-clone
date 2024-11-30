import { Badge } from '@/components/ui/badge'
import { ArrowRight, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ReportCard() {
    return (
        <>
            <div className='grid lg:grid-cols-3 border p-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 mb-12 overflow-x-auto'>
                {
                    items.map((item, index) => (
                        <div key={index} className='border rounded-lg overflow-hidden'>
                            <div className='w-64 h-full  shrink-0 rounded-lg relative border cursor-pointer duration-100'>
                                <div className='flex flex-col justify-center items-center bg-gray-900'>
                                    <Image
                                        className=''
                                        width={150}
                                        height={200}
                                        src={item.image}
                                        alt='Image band'
                                    />
                                </div>
                                <div className='w-full h-1/2 rounded-b-md flex flex-col justify-between p-4'>
                                    <div className='py-3 pb-8'>
                                        <p className='text-lg font-semibold pb-2'>{item.title}</p>
                                        {
                                            item.subTitle.map((subTitle, index) => (
                                                <Badge variant='secondary'>{subTitle}</Badge>
                                            ))
                                        }
                                    </div>
                                    <div className='text-sm text-blue-theme font-medium mt-2'>
                                        <Link className='text-blue-500 flex justify-start items-center' href='#'>See Demo Report <span className='pl-4'><ArrowRight size={15} /></span></Link>
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


const items = [
    {
        title: 'Top Brands Report (Demo)',
        subTitle: ['Smartphones', 'India'],
        image: '/rank_list.svg'
    },
    {
        title: 'Brand Deepdive Report (Demo)',
        subTitle: ['Dell Monitors', 'Amazon US'],
        image: '/brand.svg'
    },
    {
        title: 'Multi Retailer Report (Demo)',
        subTitle: ['Amazon US', 'BestBuy', 'NewEgg'],
        image: '/cross_marketplace.svg'
    },
    {
        title: 'Variant Report (Demo)',
        subTitle: ['Dell U-Series', '27 inch', '32 inch'],
        image: '/variant.svg'
    },
    {
        title: 'product SKU Report (Demo)',
        subTitle: ['Samsung CRG5 Monitor'],
        image: '/variant.svg'
    }
]