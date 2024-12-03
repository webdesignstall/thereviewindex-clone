"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ChevronRight, HelpCircle, Tally1, X } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function CreateTopics() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='sm' className="font-medium" variant="default">Add Topics</Button>
      </DialogTrigger>
      <DialogContent className={cn('max-w-full h-full w-full p-0')}>
        <DialogTitle className="hidden"></DialogTitle>
        <div className="p-6 md:p-0">
          <div>
            <header className={cn('w-full bg-background z-50 p-4 border-b-2')}>
              <div>
                <div>
                  <div className="text-xl font-medium text-gray-300"> Create a Topic</div>
                </div>
              </div>
            </header>
            <div>
              <div className="max-w-6xl m-auto grid lg:grid-cols-2 gap-20">
                <div className="pt-2">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Topic Name*</FormLabel>
                            <FormControl>
                              <Input required placeholder="Enter Topic name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Topic Description*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Topic description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Negative Topic Description*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter negative topic description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex justify-start">Search Query<span><HelpCircle size={15} className="ml-1" /></span></FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter Topic name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="w-full text-right">
                        <Button size='sm' disabled className="">Generate with AI</Button>
                      </div>
                      <div className="">
                       <div className="pb-2">
                       <p className="font-medium text-sm pb-1">Example Phrases</p>
                       <p className="text-sm font-light">help the AI learn the topic by providing examples.</p>
                       </div>
                        <div>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableCell>Topic Phrases (0)</TableCell>
                                <TableCell>Non-Topic Phrases (0)</TableCell>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>
                                  +Add new
                                </TableCell>
                                <TableCell>
                                  +Add new
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                      <div className="border flex justify-between items-center p-4">
                        <div>Advanced</div>
                        <div><ChevronRight /></div>
                      </div>
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </div>
                <div className="pt-3 max-w-sm hidden lg:inline-block">
                  <div className="text-center p-2 bg-neutral-700">
                    Preview
                  </div>
                  <div className="flex justify-center items-center h-full bg-neutral-900 ">
                    <div> No Search Quary</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
