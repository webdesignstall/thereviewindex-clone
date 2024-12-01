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

export function Comment() {
    return (
        <Tabs defaultValue="all" className="p-2">
            <TabsList className={cn('bg-transparent m-auto border gap-1 rounded-lg max-w-lg justify-center flex h-full')}>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-800 rounded-lg" value="all">
                    <div>
                        <p>ALL</p>
                        <p>(1500)</p>
                    </div>
                </TabsTrigger>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-800 rounded-lg" value="positive">
                    <div>
                        <p>POSITIVE</p>
                        <p>(1500)</p>
                    </div>
                </TabsTrigger>
                <TabsTrigger className="border w-44 h-12 data-[state=active]:bg-neutral-800 rounded-lg" value="nagative">
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
                                [1,2,3,4].map((_,index) =>(
                                    <div className="py-3" key={index} >
                                        <div className="flex pb-2">
                                            <div className="flex pr-3"><Star /><Star /><Star /><Star /><Star /></div>
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
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="nagative">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
