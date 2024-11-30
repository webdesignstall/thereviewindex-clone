'use client'
import React, { useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'
import { Calendar, ChartNoAxesColumnIncreasing, ChevronLeft, CircleHelp, Home, LineChart, LogOut, Package, Package2, Scale, Search, Settings, ShoppingCart, Star, Timer, Users2, Wrench } from 'lucide-react'
import Navbar from './Navbar'



export default function Layout({ children }: { children: React.ReactNode }) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [activeItem, setActiveItem] = React.useState<any>(topMenuItems[0].menu)
    return (
        <div>
            <div className=''>
                <div className='flex h-screen overflow-hidden print:overflow-visible bg-background print:h-auto print:w-full '>
                    <div className='relative hidden md:flex md:flex-shrink-0 border-r print:hidden group duration-75 w-16'>
                        <aside className="w-16">
                            <nav className="flex flex-col items-center gap-3 px-1 py-4">
                                <Link
                                    href="#"
                                    className="group flex h-9 w-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base bg-white"
                                >
                                    <Star className="h-4 w-4 transition-all group-hover:scale-110 text-black" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <TooltipProvider>
                                    {topMenuItems.map((item, index) => (
                                        <Tooltip key={item.label}>
                                            <TooltipTrigger onClick={() => setActiveItem(topMenuItems[index].menu)} asChild>
                                                <Link
                                                    href={item.href}
                                                    className="flex h-12 items-center justify-center rounded-lg text-muted-foreground transition-colors dark:text-white dark:hover:bg-neutral-900 w-full"
                                                >
                                                    {item.icon}
                                                    <span className="sr-only">{item.label}</span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent className='text-sm' side="right">{item.label}</TooltipContent>
                                        </Tooltip>
                                    ))}
                                </TooltipProvider>
                            </nav>
                        </aside>

                    </div>
                    <div className='flex flex-col w-0 flex-1 print:w-full'>
                        <main className='hidden md:block flex-grow overflow-auto overflow-x-hidden focus:outline-none print:block print:w-screen  print:overflow-visible print:h-auto '>
                            <div className='h-screen flex overflow-hidden print:overflow-visible print:h-auto bg-background'>
                                <div className={`absolute md:static z-30 h-full inset-y-0 right-0 max-w-3xs overflow-hidden ${parseInt(activeItem?.length) > 0 ? 'w-56' : 'w-0'}`}>
                                    <ul className='border-r border-gray-800 h-screen'>
                                        <li className='py-4 cursor-pointer flex justify-end items-center'>
                                        <ChevronLeft  className='border border-gray-800 rounded-l-2xl w-12 text-gray-400 hover:text-gray-50 duration-200' size={30} />
                                        </li>
                                        {
                                            activeItem?.map((item: any, index: number) => (
                                                <li key={index.toString()} className=''><Link className=' hover:bg-neutral-700 duration-200 cursor-pointer p-2 text-sm text-neutral-400 hover:text-neutral-50 block' href={item.link}>{item.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className='flex flex-col flex-1 print:w-full'>
                                    <main className='flex-grow overflow-auto overflow-x-hidden focus:outline-none print:block print:w-screen print:h-auto print:overflow-visible'>
                                        <div className=''>
                                            <Navbar />
                                            <div className='p-8'>
                                                {children}
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}


const topMenuItems = [
    {
        href: "/",
        label: "Home",
        icon: <Home className="h-5 w-5" />
    },
    {
        href: "/reports",
        label: "Reports",
        icon: <ChartNoAxesColumnIncreasing className="h-5 w-5" />,
        menu: [
            {
                title: 'Brand Report',
                link: '/compare/brand-report'
            },
            {
                title: 'Topics Table',
                link: '/compare/topics-table'
            },
            {
                title: 'Sentiment-Volume Report',
                link: '/compare/sentiment-volume-report'
            },
            {
                title: 'Brand Report',
                link: '/compare/brand-report'
            },
        ]
    },
    {
        href: "/search",
        label: "Search",
        icon: <Search className="h-5 w-5" />
    },
    {
        href: "/compare",
        label: "Compare",
        icon: <Scale className="h-5 w-5" />,
    },
    {
        href: "/manage/data-sources",
        label: "Manage",
        icon: <Wrench className="h-5 w-5" />,
        menu: [
            {
                title: 'Data Sources',
                link: '/manage/data-sources'
            },
            {
                title: 'Topics',
                link: '/manage/topics'
            },
            {
                title: 'Catalog',
                link: '/manage/catalog'
            },
        ]
    },
    {
        href: "/settings/preferences",
        label: "Settings",
        icon: <Settings className="h-5 w-5" />,
        menu: [
            {
                title: 'Preferences',
                link: '/settings/preferences'
            },
            {
                title: 'Plans',
                link: '/settings/plans'
            },
            {
                title: 'Profile',
                link: '/settings/profile'
            }
        ]
    },
    {
        href: "/help",
        label: "Help",
        icon: <CircleHelp className="h-5 w-5" />
    },
    {
        href: "/logout",
        label: "Logout",
        icon: <LogOut className="h-5 w-5" />
    }
];
