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
        <Tabs defaultValue="all" className="p-2 mt-6">
            <TabsList className={cn('bg-transparent m-auto border gap-1 rounded-lg max-w-xl justify-center flex h-full')}>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-800 rounded-lg" value="all">
                    <div className="flex justify-start items-center space-x-4">
                        <span><FileChartColumn className="mr-2" /></span>
                        Status
                    </div>
                </TabsTrigger>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-800 rounded-lg" value="positive">
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
                                            {/* <Rating rating={3} /> */}
                                            {/* <div>This monitor will not work with other Dell monitores that have display ports.</div> */}
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
        </Tabs>
    )
}
