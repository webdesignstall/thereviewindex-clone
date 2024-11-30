import { Button } from '@/components/ui/button'
import React from 'react'

export default function Bookmarks() {
    return (
        <div>
            <div className="my-10 max-w-7xl">
                <div className="relative w-full h-full border  rounded-md overflow-auto px-4 py-5 sm:p-5 ">
                    <div className=" cursor-default">
                        <div className="mb-4">
                            <div className="flex flex-col space-y-3">
                                <div className=" w-full font-semibold flex text-primary tracking-tight  text-lg-r text-left justify-start">Bookmarks</div>
                                <div className=" text-secondary w-full font-normal flex text-sm-r text-left justify-start">
                                    To add bookmarks, click on the bookmark icon at the top-right of each report.
                                </div>
                            </div>
                        </div>
                        <div className="w-full ">
                            <div className="flex flex-col w-full space-y-2 p-6 justify-center items-center text-center">
                                <div className="space-y-1">
                                    <div className=" text-xl font-semibold text-black dark:text-white">
                                        No Bookmarks
                                    </div>
                                    <div className=" text-sm text-gray-700 dark:text-gray-300">
                                        To add bookmarks, click on the bookmark icon at the top-right of each report.
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 md:flex-row-reverse">
                                    <Button className='font-semibold' size='sm'>Go To Reports</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
