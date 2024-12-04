import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from '@/components/ui/switch'
import { Dark } from '@/components/dark'

export default function Preferences() {
    return (
        <div className='p-3 md:p-6 lg:p-10'>
            <div>
                <div className='pb-8'>
                    <p className='font-semibold text-xl'>Settings</p>
                </div>
                <div className='py-3 px-6'>
                    <div>
                        <div>
                            <p className='text-lg font-semibold'>General</p>
                        </div>
                        <div className='p-4'>
                            <div className='max-w-2xl flex flex-row justify-between items-center'>
                                <div>
                                    <p className='text-lg'>Source Completion Alert</p>
                                    <p className='text-gray-500 italic font-medium'>Receive emails when your new sources are processed and ready.</p>
                                </div>
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a fruit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Select Time</SelectLabel>
                                                <SelectItem value="apple">Last week</SelectItem>
                                                <SelectItem value="banana">Last Month</SelectItem>
                                                <SelectItem value="blueberry">Last Year</SelectItem>
                                                <SelectItem value="grapes">Last 30 days</SelectItem>
                                                <SelectItem value="pineapple">All Time</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='p-4'>
                    <div>
                        <div>
                            <p className='text-lg font-semibold'>Email Preferences</p>
                        </div>
                        <div className='p-4'>
                            <div className='max-w-2xl flex flex-row justify-between items-center'>
                                <div>
                                    <p className='text-lg'>Default Time Period</p>
                                    <p className='text-gray-500 italic font-medium'>Default time filter for all reports and dashboards.</p>
                                </div>
                                <div>
                                <Switch id="airplane-mode" />
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='max-w-2xl flex flex-row justify-between items-center'>
                                <div>
                                    <p className='text-lg'>Default Time Period</p>
                                    <p className='text-gray-500 italic font-medium'>Default time filter for all reports and dashboards.</p>
                                </div>
                                <div>
                                <Switch id="airplane-mode" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4'>
                    <div>
                        <div>
                            <p className='text-lg font-semibold'>Appearance</p>
                        </div>
                        <div className='p-4'>
                            <div className='max-w-2xl flex flex-row justify-between items-center'>
                                <div>
                                    <p className='text-lg'>Dark Mode</p>
                                    <p className='text-gray-500 italic font-medium'>Turn on dark theme for the entire app.</p>
                                </div>
                                <div>
                                <Dark />
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='max-w-2xl flex flex-row justify-between items-center'>
                                <div>
                                    <p className='text-lg'>Custom Colorsfor dark mode</p>
                                    <p className='text-gray-500 italic font-medium'>Customize your view.</p>
                                </div>
                                <div>
                                    <div className='text-lg font-semibold text-blue-600 cursor-pointer'>reset to default</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
