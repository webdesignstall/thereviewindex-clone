'use client'
import React, { useEffect, useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'
import { Calendar, ChartNoAxesColumnIncreasing, ChevronLeft, CircleHelp, Home, LineChart, LogOut, Package, Package2, Scale, Search, Settings, ShoppingCart, Star, Timer, Users2, Wrench } from 'lucide-react'
import Navbar from './Navbar'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


export default function Layout({ children }: { children: React.ReactNode }) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null); // State to track active menu item
    const [activeItem, setActiveItem] = React.useState<any>(topMenuItems[0].menu);
    const [sidebar, setSidebar] = useState(false)
    const [value, setValue] = useState<any>(0)

    const pathname = usePathname()
    const handleMenuClick = (menuName: string, menu: any) => {
        setActiveMenu(menuName); // Set the active menu name
        setActiveItem(menu); // Set the active submenu items
        if (menu === undefined) {
            setValue(0)
            setSidebar(false)
        } else if (menu.length > 0) {
            setSidebar(true)
            setValue(1)
        }
    }

    useEffect(() => {
        if (pathname === '/reports/brand-report') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[1].menu)
        } else if (pathname === '/reports/brand-report') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[1].menu)
        } else if (pathname === '/reports/topics-table') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[1].menu)
        } else if (pathname === '/reports/sentiment-volume-report') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[1].menu)
        } else if (pathname === '/manage/data-sources') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[5].menu)
        } else if (pathname === '/manage/topics') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[5].menu)
        } else if (pathname === '/manage/catalog') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[5].menu)
        } else if (pathname === '/settings/preferences') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[6].menu)
        } else if (pathname === '/settings/plans') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[6].menu)
        } else if (pathname === '/settings/profile') {
            setSidebar(true)
            setValue(1)
            setActiveItem(topMenuItems[6].menu)
        } else {
            // setSidebar(true)
            // setValue(1)
        }
    }, [pathname])

    return (
        <div>
            <div className=''>
                <div className='flex h-screen overflow-hidden print:overflow-visible bg-background print:h-auto print:w-full '>
                    <div className='relative hidden md:flex md:flex-shrink-0 border-r print:hidden group duration-75 w-16'>
                        <aside className="w-16">
                            <nav className="flex flex-col justify-center items-center gap-3 px-1 py-4 h-full">
                                <Link
                                    href="#"
                                    className="group flex h-9 w-10 shrink-0 items-center justify-center gap-2 rounded-lg  text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                                >
                                    <Image
                                        width={100}
                                        height={100}
                                        src='/tu-berlin-logo-long-red.svg'
                                        alt='Logo'
                                    />
                                </Link>
                                <TooltipProvider>
                                    {topMenuItems.map((item, index) => (
                                        <Tooltip key={index}>
                                            <TooltipTrigger className={index === 4 ? 'flex-grow' : ''} onClick={() => handleMenuClick(item.label, item.menu)} asChild>
                                                <Link
                                                    href={item.href}
                                                    className={` ${index === 4 ? '' : 'flex h-12 items-center justify-center rounded-lg transition-colors dark:text-white dark:hover:bg-neutral-900  w-full'}  ${activeMenu === item.label ? ' bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white' : ''}`}
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
                    <div className='flex flex-col flex-1 print:w-full'>
                        <main className='md:block flex-grow overflow-auto overflow-x-hidden focus:outline-none print:block print:w-screen  print:overflow-visible print:h-auto '>
                            <div className='h-screen flex overflow-hidden print:overflow-visible print:h-auto bg-background'>
                                <div className={`absolute md:static z-30 h-full hidden lg:inline-block inset-y-0 right-0 max-w-3xs overflow-hidden ${sidebar ? 'w-56' : 'w-0'}`}>
                                    <ul className='border-r dark:border-gray-800 h-screen'>
                                        <li onClick={() => setSidebar(!sidebar)} className={`py-4 cursor-pointer flex justify-end items-center  ${value === 0 ? 'hidden' : 'flex'}`}>
                                            <ChevronLeft className={`border bg-neutral-50 dark:bg-neutral-700 top-4 absolute rounded-l-2xl w-10 text-gray-700  dark:text-gray-50 duration-200 ${sidebar ? 'hover:w-12' : 'rotate-180 left-16 hover:w-12'}`} size={30} />
                                        </li>
                                        {
                                            activeItem?.map((item: any, index: number) => (
                                                <li key={index} className=''>
                                                    <Link className={` ${pathname === item.link ? 'bg-neutral-100 dark:bg-neutral-700 dark:text-white' : ''} ${index === 0 ? 'text-xs text-gray-700 font-semibold p-2 bg-neutral-100 dark:bg-neutral-950 uppercase w-full block' : 'dark:hover:bg-neutral-700 hover:bg-neutral-100 duration-200 cursor-pointer p-2 text-sm dark:text-neutral-400 dark:hover:text-neutral-50 block'}`} href={item.link}>{item.title}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className='flex flex-col flex-1 print:w-full'>
                                    <main className='flex-grow overflow-auto overflow-x-hidden focus:outline-none print:block print:w-screen print:h-auto print:overflow-visible'>
                                        <div className=''>
                                            <Navbar />
                                            <div className=''>
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
        href: "/reports/brand-report",
        label: "Reports",
        icon: <ChartNoAxesColumnIncreasing className="h-5 w-5" />,
        menu: [
            {
                title: "Reports",
                link: '/reports/brand-report'
            },
            {
                title: 'Brand Report',
                link: '/reports/brand-report'
            },
            {
                title: 'Topics Table',
                link: '/reports/topics-table'
            },
            {
                title: 'Sentiment-Volume Report',
                link: '/reports/sentiment-volume-report'
            },
            {
                title: 'Product Report',
                link: '/reports/product-report'
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
        href: "",
        label: "",
        icon: '',
    },
    {
        href: "/manage/data-sources",
        label: "Manage",
        icon: <Wrench className="h-5 w-5" />,
        menu: [
            {
                title: "Manage",
                link: '/manage/data-sources'
            },
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
                title: 'Settings',
                link: '/settings/preferences'
            },
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
