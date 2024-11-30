"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const FormSchema = z.object({
    fullName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    companyName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    designation: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export default function Profile() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullName: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {

    }

    return (
        <div>
            <div>
                <div className="pb-8">
                    <p className="text-xl font-semibold tracking-wider">Profile</p>
                </div>
                <div className="px-6 py-3">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-6">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">Full Name</FormLabel>
                                        <FormControl>
                                            <Input className="dark:border-gray-800" placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">Company</FormLabel>
                                        <FormControl>
                                            <Input className="dark:border-gray-800" placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="designation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">Designation</FormLabel>
                                        <Select  onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="dark:border-gray-800">
                                                    <SelectValue placeholder="Select a verified email to display" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                <SelectItem value="m@example.com">m@example.com</SelectItem>
                                                <SelectItem value="m@google.com">m@google.com</SelectItem>
                                                <SelectItem value="m@support.com">m@support.com</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
