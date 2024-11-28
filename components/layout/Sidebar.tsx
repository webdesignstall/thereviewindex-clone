import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'
import { Calendar, CircleHelp, Home, LineChart, LogOut, Package, Package2, Scale, Search, Settings, ShoppingCart, Star, Timer, Users2, Wrench } from 'lucide-react'

const topMenuItems = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "/users", label: "Users", icon: <Users2 className="h-5 w-5" /> },
    { href: "/search", label: "Search", icon: <Search className="h-5 w-5" /> },
    { href: "/compare", label: "Scale", icon: <Scale className="h-5 w-5" /> },
];

const footerMenuItems = [
    { href: "/packages", label: "Packages", icon: <Wrench  className="h-5 w-5" /> },
    { href: "/analytics", label: "Analytics", icon: <Settings className="h-5 w-5" /> },
    { href: "/timer", label: "Timer", icon: <CircleHelp className="h-5 w-5" /> },
    { href: "/shopping-cart", label: "Cart", icon: <LogOut className="h-5 w-5" /> }
];

export default function Sidebar() {
    return (
        <div>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-gray-700 sm:flex">
                {/* Top Menu */}
                <nav className="flex flex-col items-center gap-4 px-1 py-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base bg-white"
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
                                        className="flex h-9 w-12 items-center justify-center rounded-sm text-muted-foreground transition-colors text-white hover:bg-slate-800 md:h-8 md:w-8"
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
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                    <TooltipProvider>
                        {footerMenuItems.map((item) => (
                            <Tooltip key={item.label}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors text-white hover:bg-slate-800 md:h-8 md:w-8"
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
