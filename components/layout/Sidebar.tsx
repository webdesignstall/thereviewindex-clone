import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'
import { Calendar, ChartNoAxesColumnIncreasing, CircleHelp, Home, LineChart, LogOut, Package, Package2, Scale, Search, Settings, ShoppingCart, Star, Timer, Users2, Wrench } from 'lucide-react'

const topMenuItems = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "/reports", label: "Reports", icon: <ChartNoAxesColumnIncreasing className="h-5 w-5" /> },
    { href: "/search", label: "Search", icon: <Search className="h-5 w-5" /> },
    { href: "/compare", label: "Scale", icon: <Scale className="h-5 w-5" /> },
];

const footerMenuItems = [
    { href: "/manage", label: "Manage", icon: <Wrench  className="h-5 w-5" /> },
    { href: "/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
    { href: "/help", label: "Help", icon: <CircleHelp className="h-5 w-5" /> },
    { href: "/logout", label: "Logout", icon: <LogOut className="h-5 w-5" /> }
];

export default function Sidebar() {
    return (
        <div>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r dark:border-gray-700 sm:flex dark:bg-black">
                {/* Top Menu */}
                <nav className="flex flex-col items-center gap-4 px-1 py-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base bg-white"
                    >
                        <Star className="h-4 w-4 transition-all group-hover:scale-110 text-black" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>

                    {/* Map through Top Menu Items */}
                    <TooltipProvider>
                        {topMenuItems.map((item) => (
                            <Tooltip key={item.label}>
                                <TooltipTrigger asChild>
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

                {/* Footer Menu */}
                <nav className="mt-auto flex flex-col items-center gap-4 px-1 py-4">
                    <TooltipProvider>
                        {footerMenuItems.map((item) => (
                            <Tooltip key={item.label}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className="flex h-12 items-center justify-center rounded-lg text-muted-foreground transition-colors dark:text-white dark:hover:bg-neutral-900 w-full"
                                    >
                                        {item.icon}
                                        <span className="sr-only">{item.label}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{item.label}</TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </nav>
            </aside>
        </div>
    )
}
