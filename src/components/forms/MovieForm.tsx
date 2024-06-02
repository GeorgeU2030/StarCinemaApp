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
import { movieFormSchema } from '@/schemas/movieformschema'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function MovieForm() {

    const form = useForm<z.infer<typeof movieFormSchema>>({
        resolver: zodResolver(movieFormSchema),
        defaultValues: {
            title: "",
            year: 2024,
            premiereDate: "",
            rating: "",
            isprox: false,
            cover: "",
            duration: 90,
            genres: [],
            trailer: ""
        },
    })

    const [successCreation, setSuccessCreation] = React.useState(false)

    async function onSubmit(data: z.infer<typeof movieFormSchema>) {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4 py-4 px-2 flex flex-col items-center'>
            <div className='flex flex-col w-1/2'>
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='font-semibold text-one'>Title</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' />
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='font-semibold text-one'>Year</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' type='number'/>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            </div>
            <div className="flex justify-center w-1/6">
                <Button type="submit" className={'w-full bg-one text-four font-semibold hover:bg-five hover:text-one hover:border-one hover:border-2'}>Login</Button>
            </div>
            </form>
            {successCreation && <div className='text-green-800 text-center font-bold mb-2'>The movie has been created succesfully</div>}
        </Form>
    )
}
