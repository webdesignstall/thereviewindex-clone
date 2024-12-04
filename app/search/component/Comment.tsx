import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

import { Star as StarIcon } from "lucide-react";

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

export function Comment() {
    return (
        <Tabs defaultValue="all" className="p-2">
            <TabsList className={cn('bg-transparent m-auto border gap-1 rounded-lg max-w-lg justify-center flex h-full')}>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-200 dark:data-[state=active]:bg-neutral-800 rounded-lg" value="all">
                    <div>
                        <p>ALL</p>
                        <p>(1500)</p>
                    </div>
                </TabsTrigger>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-200 dark:data-[state=active]:bg-neutral-800 rounded-lg" value="positive">
                    <div>
                        <p>POSITIVE</p>
                        <p>(1500)</p>
                    </div>
                </TabsTrigger>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-200 dark:data-[state=active]:bg-neutral-800 rounded-lg" value="nagative">
                    <div>
                        <p>NEGATIVE</p>
                        <p>(1500)</p>
                    </div>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                <div>
                    <div>
                        <div className="flex justify-start items-center space-x-3">
                            <Switch />
                            <span>Full</span>
                        </div>
                        <div className="pt-6">
                            {
                                [1, 2, 3, 4].map((_, index) => (
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
