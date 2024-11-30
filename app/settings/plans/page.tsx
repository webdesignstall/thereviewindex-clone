import React from 'react'
import { PlanChart } from '@/app/component/PlanChart'
import { Price } from './component/price'

export default function Plans() {
    return (
        <div>
            <div>
                <div className='pb-8'>
                    <p className='text-2xl font-semibold'>Plans</p>
                </div>
                <div>
                    <div className='border dark:border-gray-500 p-6 grid grid-cols-6 gap-6'>
                        <div className='col-span-2 flex flex-col justify-center items-center border-r'>
                            <div className='uppercase text-gray-400 tracking-wider text-sm'>Current Plan</div>
                            <div className='text-2xl font-semibold'>Trial</div>
                        </div>
                        <div className='col-span-4'>
                            <div className='flex flex-row'>
                                <div><PlanChart /></div>
                                <div className='grid grid-cols-2 gap-3 text-gray-300'>
                                    <div>Total Monthly Quota</div>
                                    <div>3</div>
                                    <div>Quota Used</div>
                                    <div>0</div>
                                    <div>Quota Pending</div>
                                    <div>3</div>
                                    <div>Quota Expire On</div>
                                    <div>December 4, 2024</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex p-8 justify-center items-center'>
                    <div>
                        <Price />
                    </div>
                </div>
            </div>
        </div>
    )
}
