import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { roomFormSchema } from '@/schemas/roomformschema'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Select, SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue, } from '../ui/select'
import FirstRoom from '../rooms/FirstRoom'
import SecondRoom from '../rooms/SecondRoom'

export default function RoomForm() {


    const form = useForm<z.infer<typeof roomFormSchema>>({
        resolver: zodResolver(roomFormSchema),
        defaultValues: {
        name:"",
        seats:"",
        },
    })

    async function onSubmit(values: z.infer<typeof roomFormSchema>) {
        console.log(values)
    }


  return (
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4 py-4 px-2 flex flex-col items-center'>
            <div className='flex flex-row w-1/2'>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='font-semibold text-one'>Name Room</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' placeholder='Room #'/>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="seats"
                render={({ field }) => (
                    <FormItem className='ml-4'>
                        <FormLabel className='font-semibold text-one'>Number of Seats</FormLabel>
                        <FormControl>
                        <Select {...field}>
                            <SelectTrigger className="w-48 border-2 border-one">
                                <SelectValue placeholder="Select the Number" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Seats</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            </div>

            <SecondRoom view={false}/>

            <div className="flex justify-center w-1/6">
                <Button type="submit" className={'w-full bg-one text-four font-semibold hover:bg-five hover:text-one hover:border-one hover:border-2'}>Create Room</Button>
            </div>
            </form>
        </Form>
  )
}
