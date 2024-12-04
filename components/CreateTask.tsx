import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { ChevronRight, HelpCircle, Plus, Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CreateTask() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
            <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="hidden">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="relative border-b-2 flex mt-8 pb-3">
            <span><Search className="absolute top-2 left-2" /></span>
            <Input className="border-none pl-12 focus-visible:-inset-2 right-" type="search" placeholder="Search" />
          </div>
        </div>
        <div>
          <p className="pb-2">Report</p>
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Select Report" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Tabs defaultValue="all">
          <TabsList className={cn('bg-transparent pb-8')}>
            <TabsTrigger className='data-[state=active]:border-b-[3px] data-[state=active]:border-gray-300 border-transparent  border-b-[3px]' value="all">All</TabsTrigger>
            <TabsTrigger className='data-[state=active]:border-b-[3px] data-[state=active]:border-gray-300 border-transparent border-b-[3px]' value="entities">Entities</TabsTrigger>
            <TabsTrigger className='data-[state=active]:border-b-[3px] data-[state=active]:border-gray-300 border-transparent border-b-[3px]' value="brands">Brands</TabsTrigger>
            <TabsTrigger className='data-[state=active]:border-b-[3px] data-[state=active]:border-gray-300 border-transparent border-b-[3px]' value="sources">Sources</TabsTrigger>
          </TabsList>
          <TabsContent className="border-none" value="all">
            <div className="h-96 flex justify-center items-center flex-col">
              <div className="space-y-3 flex flex-col justify-center items-center">
                <div className="text-xl font-semibold">No Result Found</div>
                <div className="text-gray-300 flex flex-row text-sm">Add products by going to manage <ChevronRight size={20} /> Sources</div>
                <Button size='sm' className="font-medium">Create New Source</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent className="border-none" value="entities">
            <div className="h-96 flex justify-center items-center flex-col">
              <div className="space-y-3 flex flex-col justify-center items-center">
                <div className="text-xl font-semibold">No Result Found</div>
                <div className="text-gray-300 flex flex-row text-sm">Add products by going to manage <ChevronRight size={20} /> Sources</div>
                <Button size='sm' className="font-medium">Create New Source</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent className="border-none" value="brands">
            <div className="h-96 flex justify-center items-center flex-col">
              <div className="space-y-3 flex flex-col justify-center items-center">
                <div className="text-xl font-semibold">No Result Found</div>
                <div className="text-gray-300 flex flex-row text-sm">Add products by going to manage <ChevronRight size={20} /> Sources</div>
                <Button size='sm' className="font-medium">Create New Source</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent className="border-none" value="sources">
            <div className="h-96 flex justify-center items-center flex-col">
              <div className="space-y-3 flex flex-col justify-center items-center">
                <div className="text-xl font-semibold">No Result Found</div>
                <div className="text-gray-300 flex flex-row text-sm">Add products by going to manage <ChevronRight size={20} /> Sources</div>
                <Button size='sm' className="font-medium">Create New Source</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
