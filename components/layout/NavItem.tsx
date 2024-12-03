import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    Home,
    ChartNoAxesColumnIncreasing,
    Scale,
    Wrench,
    CircleHelp
  } from "lucide-react";
  
  import { Button } from "@/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  
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
  
  export function NavbarItem() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <div className="text-lg font-semibold">Brand Logo</div>
  
          {/* Sidebar Menu Items */}
          <DropdownMenuGroup>
            {topMenuItems.map((item) => (
              <div key={item.href} className="relative">
                {/* Menu Item without Submenu */}
                {!item.menu ? (
                  <DropdownMenuItem asChild>
                    <a
                      href={item.href}
                      className="flex items-center p-2 rounded-md hover:bg-gray-700"
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </a>
                  </DropdownMenuItem>
                ) : (
                  // Menu Item with Submenu
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <div className="flex items-center p-2 rounded-md hover:bg-gray-700">
                        {item.icon}
                        <span className="ml-3">{item.label}</span>
                      </div>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      {item.menu.map((subItem) => (
                        <DropdownMenuItem key={subItem.id} asChild>
                          <a
                            href={subItem.link}
                            className="block p-2 pl-8 text-sm text-gray-300 hover:bg-gray-700"
                          >
                            {subItem.title}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                )}
              </div>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  