import React, { useState } from 'react';
import { Home, ChartNoAxesColumnIncreasing, Scale, Wrench, Settings, CircleHelp, LogOut, AlignJustify } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from 'next/link';

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
      { id: 1, title: 'Brand Report', link: '/reports/brand-report' },
      { id: 2, title: 'Topics Table', link: '/reports/topics-table' },
      { id: 3, title: 'Sentiment-Volume Report', link: '/reports/sentiment-volume-report' },
      { id: 4, title: 'Product Report', link: '/reports/product-report' }
    ]
  },
  {
    href: "/search",
    label: "Search",
    icon: <Scale className="h-5 w-5" />
  },
  {
    href: "/compare",
    label: "Compare",
    icon: <Scale className="h-5 w-5" />
  },
  {
    href: "/manage/data-sources",
    label: "Manage",
    icon: <Wrench className="h-5 w-5" />,
    menu: [
      { id: 1, title: 'Data Sources', link: '/manage/data-sources' },
      { id: 2, title: 'Topics', link: '/manage/topics' },
      { id: 3, title: 'Catalog', link: '/manage/catalog' }
    ]
  },
  {
    href: "/settings/preferences",
    label: "Settings",
    icon: <Settings className="h-5 w-5" />,
    menu: [
      { id: 1, title: 'Preferences', link: '/settings/preferences' },
      { id: 2, title: 'Plans', link: '/settings/plans' },
      { id: 3, title: 'Profile', link: '/settings/profile' }
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

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className="max-w-xs w-full">
          <SheetHeader className='hidden'>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Select an option to navigate.
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-4">
            {topMenuItems.map((item) => (
              <div key={item.href} className="space-y-2">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <Link href={item.href} className="text-md font-medium">
                    <SheetClose>
                      {item.label}
                    </SheetClose>
                  </Link>
                </div>
                {item.menu && (
                  <div className="pl-6 space-y-2">
                    {item.menu.map((subItem) => (
                      <div key={subItem.id} className="flex items-center space-x-2 w-full">
                        <Link href={subItem.link} className="text-sm text-gray-500 w-full hover:text-gray-300 duration-150">
                          <SheetClose>
                            {subItem.title}
                          </SheetClose>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
