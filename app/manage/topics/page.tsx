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
import { FileImage, HelpCircle } from 'lucide-react'
import Image from 'next/image'
import { CreateTopics } from './component/CreateTopics'

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

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
                            <Card>
                                <CardHeader className='hidden'>
                                    <CardTitle>Password</CardTitle>
                                    <CardDescription>
                                        Change your password here. After saving, you'll be logged out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="">
                                    <Table>
                                        <TableCaption>A list of your recent invoices.</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Invoice</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Method</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {invoices.map((invoice) => (
                                                <TableRow key={invoice.invoice}>
                                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow>
                                                <TableCell colSpan={3}>Total</TableCell>
                                                <TableCell className="text-right">$2,500.00</TableCell>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </CardContent>
                                <CardFooter className='hidden'>
                                    <Button>Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
