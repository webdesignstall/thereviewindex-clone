'use client'
import { MentionChart } from "@/app/search/component/MentionChart";
import { Switch } from "@/components/ui/switch"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

import { FileChartColumn, MessageSquare, Star as StarIcon } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from "antd";

const Rating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex pr-3">
            {Array.from({ length: 5 }, (_, index) => (
                <StarIcon
                    key={index}
                    className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                />
            ))}
        </div>
    );
};

export default function TableSidebar() {
    return (
        <>

            <div className=" md:static z-30 h-full inset-y-0 right-0 w-screen  md:max-w-sm xl:max-w-sm mt-8">
                <div className="h-full print:hidden ">
                    <div className=" h-full flex flex-col  relative overflow-auto  border-l">
                        <div className="h-full w-full flex flex-col">
                            <header className="">
                                <div className="mx-12 my-4">
                                    <div
                                        className="flex shrink min-w-0 items-center justify-start overflow-hidden pr-1 gap-1 flex-wrap"></div>
                                </div>
                                <ul className="flex border-b border-gray-200 dark:border-gray-800 space-x-6 px-4">
                                    <li>
                                        <button
                                            className=" transition duration-150 group inline-flex items-center py-2  border-b-4 font-medium text-sm leading-5 focus:outline-none  cursor-pointer border-transparent text-gray-600 dark:text-gray-500  hover:text-gray-700 dark:hover:text-gray-400 hover:border-gray-500 focus:text-gray-700 focus:border-gray-400 ">
                                            <span><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                                                       className="-ml-0.5 mr-2 h-5 w-5 text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-400 group-focus:text-gray-700 "
                                                       stroke="currentColor" fill="none"><path strokeLinecap="round"
                                                                                               strokeLinejoin="round"
                                                                                               strokeWidth="2"
                                                                                               d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></span>Stats
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className=" transition duration-150 group inline-flex items-center py-2  border-b-4 font-medium text-sm leading-5 focus:outline-none  border-primary ">
                                            <span><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                                                       className="-ml-0.5 mr-2 h-5 w-5  text-primary "
                                                       stroke="currentColor" fill="none"><path strokeLinecap="round"
                                                                                               strokeLinejoin="round"
                                                                                               strokeWidth="2"
                                                                                               d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></span>Comments
                                        </button>
                                    </li>
                                </ul>
                                <div className="max-w-lg m-auto">
                                    <div
                                        className="grid grid-flow-row-dense grid-cols-4 text-center m-2 border  rounded-md overflow-hidden gap-1 p-0.5">
                                        <div className="border  rounded-md">
                                            <div className="relative min-w-0 ">
                                                <div className=" max-w-full truncate h-full">
                                                    <div
                                                        className="h-full text-xs py-1  cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
                                                        <div
                                                            className="leading-4 font-semibold tracking-wider flex text-xxs-r text-neutral-900 dark:text-neutral-50 uppercase w-full text-center justify-center">All
                                                        </div>
                                                        <div className="py-1"><span
                                                            className="text-xs text-neutral-900 dark:text-neutral-50"> (18000) </span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border  rounded-md">
                                            <div className="relative min-w-0 ">
                                                <div className=" max-w-full truncate h-full">
                                                    <div
                                                        className="h-full text-xs py-1  cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
                                                        <div
                                                            className="leading-4 font-semibold tracking-wider flex text-xxs-r text-neutral-900 dark:text-neutral-50 uppercase w-full text-center justify-center">Positive
                                                        </div>
                                                        <div className="py-1"><span
                                                            className="text-primary font-medium">81.6%&nbsp;</span><span
                                                            className="text-xs text-neutral-900 dark:text-neutral-50"> (14693) </span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border  rounded-md">
                                            <div className="relative min-w-0 ">
                                                <div className=" max-w-full truncate h-full">
                                                    <div className="h-full text-xs py-1 bg-muted ">
                                                        <div
                                                            className="leading-4 font-semibold tracking-wider flex text-xxs-r text-neutral-900 dark:text-neutral-50 uppercase w-full text-center justify-center">Negative
                                                        </div>
                                                        <div className="py-1"><span
                                                            className="text-primary font-medium">10%&nbsp;</span><span
                                                            className="text-xs text-neutral-900 dark:text-neutral-50"> (1795) </span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border  rounded-md">
                                            <div className="relative min-w-0 ">
                                                <div className=" max-w-full truncate h-full">
                                                    <div
                                                        className="h-full text-xs py-1  cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
                                                        <div
                                                            className="leading-4 font-semibold tracking-wider flex text-xxs-r text-neutral-900 dark:text-neutral-50 uppercase w-full text-center justify-center">Neutral
                                                        </div>
                                                        <div className="py-1"><span
                                                            className="text-primary font-medium">8.4%&nbsp;</span><span
                                                            className="text-xs text-neutral-900 dark:text-neutral-50"> (1512) </span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div className="overflow-y-auto flex-grow pt-3">
                                <div className="hidden "></div>
                                <div className="block ">
                                    <div className="overflow-y-auto h-full p-2">
                                        <div className="flex justify-between items-center my-2">
                                            <div className="">
                                                <div
                                                    className="flex justify-between w-full text-sm font-medium leading-5 text-gray-700 dark:text-gray-500 ">
                                                    <div className="flex items-center space-x-4">
                                                        {/* @ts-ignore */}
                                                        <Switch />
                                                    </div>
                                                    <div className="ml-2 text-gray-700 dark:text-gray-500">Full</div>
                                                </div>
                                            </div>
                                            <div>
                                                <Select>
                                                    <SelectTrigger className="w-[120px]">
                                                        <SelectValue placeholder="Semantic" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="semantic">Semantic</SelectItem>
                                                        <SelectItem value="recent">Recent</SelectItem>
                                                        <SelectItem value="popularity">Popularity</SelectItem>
                                                    </SelectContent>
                                                </Select>

                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group py-2 border-b">
                                                <div className="cursor-pointer">
                                                    <div
                                                        className="break-words text-sm text-gray-800 dark:text-gray-300 pr-2">
                                                        <span><span className="font-light">Not good.</span>&nbsp;</span><span><span
                                                        className="font-medium dark:text-gray-200"><span>&nbsp;
                                                        <span><span></span><span
                                                            className="bg-yellow-200 dark:text-black dark:bg-yellow-200">Screen</span></span></span><span> is blurry</span></span>&nbsp;</span>
                                                    </div>
                                                </div>
                                                <div className="flex h-10 justify-between items-center"><a
                                                    href="https://www.amazon.com/gp/customer-reviews/R1AKNHR3Y4MPEK"
                                                    target="_blank" rel="noreferrer">
                                                    <div
                                                        className="text-xs italic pt-1 text-gray-600 dark:text-gray-300 font-light">
                                                        <span className="not-italic"><span>★ </span></span><span
                                                        className="w-10 truncate"> by E</span><span> on November 12, 2024</span>
                                                    </div>
                                                </a>
                                                    <div className="invisible group-hover:visible">
                                                        <div className="text-left">
                                                            <div className="focus:outline-none  cursor-pointer w-fit">
                                                                <span><svg viewBox="0 0 24 24"
                                                                           preserveAspectRatio="xMidYMid meet"
                                                                           className="h-5 w-5" stroke="currentColor"
                                                                           fill="none"><path strokeLinecap="round"
                                                                                             strokeLinejoin="round"
                                                                                             strokeWidth="2"
                                                                                             d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group py-2 border-b">
                                                <div className="cursor-pointer">
                                                    <div
                                                        className="break-words text-sm text-gray-800 dark:text-gray-300 pr-2">
                                                        <span><span className="font-light">Quality sucks, returning is a pain.</span>&nbsp;</span><span><span
                                                        className="font-medium dark:text-gray-200"><span>&nbsp;
                                                        <span><span>The </span><span
                                                            className="bg-yellow-200 dark:text-black dark:bg-yellow-200">picture quality</span></span></span><span> on this monitor sucks.</span></span>&nbsp;</span><span><span
                                                        className="font-light">It’s super pixelated and awkward.</span>&nbsp;</span><span><span
                                                        className="font-light">I went to return it and I can’t return it inside the box they shipped it to me in.</span>&nbsp;</span><span><span
                                                        className="font-light">UPS wanted me to pay $50 for their box to ship it in.</span>&nbsp;</span><span><span
                                                        className="font-light">Don’t waste your money.</span>&nbsp;</span>
                                                    </div>
                                                </div>
                                                <div className="flex h-10 justify-between items-center"><a
                                                    href="https://www.amazon.com/gp/customer-reviews/R205W16YGNZH16"
                                                    target="_blank" rel="noreferrer">
                                                    <div
                                                        className="text-xs italic pt-1 text-gray-600 dark:text-gray-300 font-light">
                                                        <span className="not-italic"><span>★ </span></span><span
                                                        className="w-10 truncate"> by D C</span><span> on November 8, 2024</span>
                                                    </div>
                                                </a>
                                                    <div className="invisible group-hover:visible">
                                                        <div className="text-left">
                                                            <div className="focus:outline-none  cursor-pointer w-fit">
                                                                <span><svg viewBox="0 0 24 24"
                                                                           preserveAspectRatio="xMidYMid meet"
                                                                           className="h-5 w-5" stroke="currentColor"
                                                                           fill="none"><path strokeLinecap="round"
                                                                                             strokeLinejoin="round"
                                                                                             strokeWidth="2"
                                                                                             d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group py-2 border-b">
                                                <div className="cursor-pointer">
                                                    <div
                                                        className="break-words text-sm text-gray-800 dark:text-gray-300 pr-2">
                                                        <span><span className="font-medium dark:text-gray-200"><span>&nbsp;
                                                            <span><span></span><span
                                                                className="bg-yellow-200 dark:text-black dark:bg-yellow-200">Monitor flickers</span></span></span><span> periodically.</span></span>&nbsp;</span><span><span
                                                        className="font-light">Once in a while the monitor starts flickering and stays for several minutes and goes away by itself.</span>&nbsp;</span><span><span
                                                        className="font-light">It is really annoying.</span>&nbsp;</span>
                                                    </div>
                                                </div>
                                                <div className="flex h-10 justify-between items-center"><a
                                                    href="https://www.amazon.com/gp/customer-reviews/R21VKZ1N1ZTMU4"
                                                    target="_blank" rel="noreferrer">
                                                    <div
                                                        className="text-xs italic pt-1 text-gray-600 dark:text-gray-300 font-light">
                                                        <span className="not-italic"><span>★ </span></span><span
                                                        className="w-10 truncate"> by M M</span><span> on October 13, 2024</span>
                                                    </div>
                                                </a>
                                                    <div className="invisible group-hover:visible">
                                                        <div className="text-left">
                                                            <div className="focus:outline-none  cursor-pointer w-fit">
                                                                <span><svg viewBox="0 0 24 24"
                                                                           preserveAspectRatio="xMidYMid meet"
                                                                           className="h-5 w-5" stroke="currentColor"
                                                                           fill="none"><path strokeLinecap="round"
                                                                                             strokeLinejoin="round"
                                                                                             strokeWidth="2"
                                                                                             d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 mb-40 p-4">
                                            <div className="h-full flex items-center">
                                                <div className="max-w-lg mx-auto">
                                                    <div className="text-center"><span><svg viewBox="0 0 24 24"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            className="m-auto h-12 w-12"
                                                                                            stroke="currentColor"
                                                                                            fill="none"><path
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></span>
                                                        <div className="my-8"><h3
                                                            className="mt-2 text-xl font-medium text-black dark:text-gray-200">Comments
                                                            restricted!</h3><p
                                                            className="mt-1 text-md text-gray-700 dark:text-gray-500">Upgrade
                                                            to a paid plan to see all comments!</p></div>
                                                        <Button type={'primary'} size={'large'}>
                                                            Upgrade Plan
                                                        </Button>
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
        </>

    )
}


/*<Tabs defaultValue="all" className="p-2 mt-6">
            <TabsList className={cn('bg-transparent m-auto border gap-1 rounded-lg max-w-xl justify-center flex h-full')}>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-200 dark:data-[state=active]:bg-neutral-800 rounded-lg" value="all">
                    <div className="flex justify-start items-center space-x-4">
                        <span><FileChartColumn className="mr-2" /></span>
                        Status
                    </div>
                </TabsTrigger>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-200 dark:data-[state=active]:bg-neutral-800 rounded-lg" value="positive">
                    <div className="flex justify-start items-center space-x-4">
                        <span><MessageSquare className="mr-2" /></span>
                        Comments
                    </div>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                <div>
                    <div className='grid grid-cols-2 p-2 gap-1'>
                        <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                            <p className='text-sm text-gray-400'>POSITIVE</p>
                            <p>1500</p>
                        </div>
                        <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                            <p className='text-sm text-gray-400'>POSITIVE</p>
                            <p>1500</p>
                        </div>
                        <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                            <p className='text-sm text-gray-400'>POSITIVE</p>
                            <p>1500</p>
                        </div>
                        <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                            <p className='text-sm text-gray-400'>POSITIVE</p>
                            <p>1500</p>
                        </div>
                        <div className='border w-full h-16 justify-center items-center flex rounded-md flex-col'>
                            <p className='text-sm text-gray-400'>POSITIVE</p>
                            <p>1500</p>
                        </div>
                    </div>
                    <div>
                        <MentionChart />
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="positive">
                <div>
                    <div>
                        <div className="flex justify-start items-center space-x-3">
                            <Switch />
                            <span>Full</span>
                        </div>
                        <div className="pt-6">
                            {
                                [1, 2, 3].map((_, index) => (
                                    <div className="py-3" key={index} >
                                        <div className="flex pb-2">
                                            {/!* <Rating rating={3} /> *!/}
                                            {/!* <div>This monitor will not work with other Dell monitores that have display ports.</div> *!/}
                                        </div>
                                        <div className="border-t-2 border-t-gray-600 pt-3">
                                            This monitor well not wok with other Dell monitores that have display pa excepturi est dignissimos rerum, laboriosam eveniet, obcaecati temporibus ex quaerat praesentium.
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="nagative">
                <div>
                    <div>
                        <div className="flex justify-start items-center space-x-3">
                            <Switch />
                            <span>Full</span>
                        </div>
                        <div className="pt-6">
                            {
                                [1].map((_, index) => (
                                    <div className="py-3" key={index} >
                                        <div className="flex pb-2">
                                            <Rating rating={3} />
                                            <div>This monitor will not work with other Dell monitores that have display ports.</div>
                                        </div>
                                        <div>
                                            This monitor well not wok with other Dell monitores that have display parts out, even with a display port/HDMI cable. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quisquam perspiciatis dolorum ullam nisi illo, distinctio quasi nobis tempora error. Vero velit sint facilis tempora corporis quasi libero nostrum fugiat repudiandae similique. Asperiores mollitia illo commodi excepturi est dignissimos rerum, laboriosam eveniet, obcaecati temporibus ex quaerat praesentium.
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </TabsContent>
        </Tabs>*/
