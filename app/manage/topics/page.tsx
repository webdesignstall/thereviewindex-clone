import React from 'react'
import { Button } from '@/components/ui/button'
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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from '@/lib/utils'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { EllipsisVertical, FileImage, HelpCircle } from 'lucide-react'
import Image from 'next/image'
import { CreateTopics } from './component/CreateTopics'
import { Badge } from '@/components/ui/badge'


export default function Topics() {
    return (
        <div>
            <div>
                <div className='flex justify-between items-center pb-8'>
                    <div className='text-2xl font-semibold'>Topics</div>
                    <div>
                        <CreateTopics />
                    </div>
                </div>
                <div>
                    <Tabs defaultValue="account" className="">
                        <TabsList className={cn('bg-transparent pb-8')}>
                            <TabsTrigger className='data-[state=active]:border-b-[3px] data-[state=active]:border-gray-300 border-transparent
                             border-b-[3px]' value="account">User Topics <span className='ml-2'> <HelpCircle size={15} /> </span></TabsTrigger>
                            <TabsTrigger className='data-[state=active]:border-b-[3px] data-[state=active]:border-gray-300 border-transparent
                             border-b-[3px]' value="password">System Topics <span className='ml-2'> <HelpCircle size={15} /> </span></TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card>
                                <CardHeader className='hidden'>
                                    <CardTitle>Account</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click save when you're done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="">
                                    <div className='p-8 flex flex-col space-y-2 justify-center items-center'>
                                        <FileImage className='text-gray-400' size={60} />
                                        <p className='text-xl font-medium'>No Manual topics found</p>
                                        <p>you've not added any manual topics yet.</p>
                                    </div>
                                </CardContent>
                                <CardFooter className='hidden'>
                                    <Button>Save changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Table>
                                <TableCaption>A list of your recent invoices.</TableCaption>
                                <TableHeader>
                                    <TableRow className='bg-neutral-800 uppercase'>
                                        <TableHead >Name</TableHead>
                                        <TableHead className='text-center'>Status</TableHead>
                                        <TableHead>Example Sentences</TableHead>
                                        <TableHead className="text-right"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((invoice, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium border-none lg:w-1/5">{invoice.name}</TableCell>
                                            <TableCell className='border-none text-center lg:w-1/3'>
                                            <Badge variant='outline'>{invoice.status}</Badge>
                                            </TableCell>
                                            <TableCell className='border-none'>{invoice.example_sentence}</TableCell>
                                            <TableCell className='text-right flex justify-end border-none'>
                                            <EllipsisVertical />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}



 const invoices = [
    {
      "name": "Performance",
      "status": "Enabled",
      "example_sentence": "Whether working on work projects, browsing the web, watch a movie, or review had pictures, this monitor performs flawlessly with great definition, clarity, contrast, and color."
    },
    {
      "name": "Power",
      "status": "Enabled",
      "example_sentence": "I like how it shows total time powered on in settings."
    },
    {
      "name": "Software",
      "status": "Enabled",
      "example_sentence": "It's great being able to have a full browser tab open and have something more space on the side, really useful for messaging applications like Discord."
    },
    {
      "name": "Stand",
      "status": "Enabled",
      "example_sentence": "I have it attached to my 'EleTab Single Monitor Stand' and it sits & swings perfectly on my desk."
    },
    {
      "name": "Battery",
      "status": "Enabled",
      "example_sentence": "Next, the power."
    },
    {
      "name": "Camera",
      "status": "Enabled",
      "example_sentence": "Perfect for Security Cameras."
    },
    {
      "name": "Memory",
      "status": "Enabled",
      "example_sentence": "Running this monitor with 3400g Ryzen, 16gb RAM, no dedicated graphics card."
    },
    {
      "name": "Ports",
      "status": "Enabled",
      "example_sentence": "Had 2 HDMI and one display port, I VESA mounted two of these 27 inch monitors on a max 27 inch stand and they are lightweight, small bezel."
    },
    {
      "name": "Controls",
      "status": "Enabled",
      "example_sentence": "All I have to do is push a button on the monitor to toggle between inputs."
    },
    {
      "name": "Display",
      "status": "Enabled",
      "example_sentence": "Great screen, Produces bright vivid colors and amazing resolution."
    },
    {
      "name": "WiFi",
      "status": "Enabled",
      "example_sentence": "WiFi free monitor with excellent reception."
    },
    {
      "name": "Color",
      "status": "Enabled",
      "example_sentence": "Great screen, Produces bright vivid colors and amazing resolution."
    },
    {
      "name": "Clarity",
      "status": "Enabled",
      "example_sentence": "Great screen, Produces bright vivid colors and amazing resolution."
    },
    {
      "name": "Storage",
      "status": "Enabled",
      "example_sentence": "It has a much smaller footprint than the CRT and this means more desk space."
    },
    {
      "name": "Smell",
      "status": "Enabled",
      "example_sentence": "This continued for about 30 seconds, and then we started smelling a strong burning electronics smell."
    },
    {
      "name": "Usage",
      "status": "Enabled",
      "example_sentence": "Great gaming monitor."
    },
    {
      "name": "Usage / Gaming",
      "status": "Enabled",
      "example_sentence": "Excellent for any HDR gaming."
    },
    {
      "name": "Usage / Travel",
      "status": "Enabled",
      "example_sentence": "I bought these the day before I headed out of town for a work trip."
    },
    {
      "name": "Usage / Work",
      "status": "Enabled",
      "example_sentence": "Excellent value for work and fun!"
    },
    {
      "name": "Sound",
      "status": "Enabled",
      "example_sentence": "Great Large Monitor For Music Production."
    },
    {
      "name": "Comfort",
      "status": "Enabled",
      "example_sentence": "Ergonomic."
    },
    {
      "name": "Size",
      "status": "Enabled",
      "example_sentence": "Decent color, brightness size and good ease of use."
    },
    {
      "name": "Fit",
      "status": "Enabled",
      "example_sentence": "This monitors stand seems sturdy, very little shaking AND is clean, the area under the screen, I can fit my keyboard there easily and it doesn't slide back."
    },
    {
      "name": "Design",
      "status": "Enabled",
      "example_sentence": "This monitor looks fantastic."
    },
    {
      "name": "Build Quality",
      "status": "Enabled",
      "example_sentence": "Excellent quality."
    },
    {
      "name": "Compatibility",
      "status": "Enabled",
      "example_sentence": "I have been looking for a monitor that works with my Xbox Series X and my 2021 iMac."
    },
    {
      "name": "Cable",
      "status": "Enabled",
      "example_sentence": "It has a convenient detachable stand that also doubles as a built-in cable management system."
    },
    {
      "name": "Bluetooth",
      "status": "Enabled",
      "example_sentence": "Love the picture, love the clean design but the negative is that you have to buy your own speakers, which for PS3 user is a pain since PS3 doesn't support bluetooth speakers (only bluetooth headsets)."
    },
    {
      "name": "Microphone",
      "status": "Enabled",
      "example_sentence": "I now have 2 32' monitors, a Razer BlackWindow Elite wire keyboard (2 USB connectors + mic), a Logitech C920 webcam, a Fifine K670B microphone, an Inateck dual-bay external SSD docking station + 2 Samsung SSD 860 EVO 2TB, a SanDisk Extreme PRO CFast 2.0 Reader/Writer, an old Western Digital 2TB HHD drive and a couple other peripherals which well exceed the number of ports on the Belkin T3 Dock Mini."
    },
    {
      "name": "Reliability",
      "status": "Enabled",
      "example_sentence": "Able to scale to QHD with no issues."
    },
    {
      "name": "Heating",
      "status": "Enabled",
      "example_sentence": "With the LED they don't use too much energy and therefore don't generate too much heat."
    },
    {
      "name": "Texture",
      "status": "Enabled",
      "example_sentence": "I really like the anti-dust coating too."
    },
    {
      "name": "Cleaning",
      "status": "Enabled",
      "example_sentence": "Super fast and super clean."
    },
    {
      "name": "Price",
      "status": "Enabled",
      "example_sentence": "Bought this at Black Friday price and feel like I stole it."
    },
    {
      "name": "Ease of Use",
      "status": "Enabled",
      "example_sentence": "Great color, easy setup, and intuitive controls."
    },
    {
      "name": "Installation & Assembly",
      "status": "Enabled",
      "example_sentence": "Easy set up."
    },
    {
      "name": "Instruction Manual",
      "status": "Enabled",
      "example_sentence": "The monitor provided an easy way to spread my documents and spreadsheets across multiple screens, improving my productivity."
    },
    {
      "name": "Service",
      "status": "Enabled",
      "example_sentence": "Great Service at Best Buy."
    },
    {
      "name": "Marketplace",
      "status": "Enabled",
      "example_sentence": "Product was inspected and clean as indicated on the box."
    },
    {
      "name": "Marketplace / Missing Items",
      "status": "Enabled",
      "example_sentence": "And if you want to VESA mount it, the stand comes off very easily with the push of one button, and the mounting screws are already included (you have to unscrew them first)."
    },
    {
      "name": "Marketplace / Defective",
      "status": "Enabled",
      "example_sentence": "It comes with a magnetic cover to protect it from scratches."
    },
    {
      "name": "Marketplace / Delivery",
      "status": "Enabled",
      "example_sentence": "Arrived as advertised."
    },
    {
      "name": "Marketplace / Returns",
      "status": "Enabled",
      "example_sentence": "Dell has a great return policy and although others complain, I find the outsourced customer service in India to be helpful whenever I need them."
    },
    {
      "name": "Marketplace / Product As Described",
      "status": "Enabled",
      "example_sentence": "Exactly as advertised."
    },
    {
      "name": "Marketplace / Packaging",
      "status": "Enabled",
      "example_sentence": "Everything I needed was in the box."
    }
  ]
  