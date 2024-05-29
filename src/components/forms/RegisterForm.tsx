import React from 'react'

// imports for the Form
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
import { registerFormSchema } from '@/schemas/registerformschema'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useRegisterCustomerMutation } from '@/store/services/userApi'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {

    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            email:"",
            password:"",
            name:"",
            lastname:"",
            location:"",
        },
    }) 

    const router = useRouter()

    const [registerUser, { data, error }] = useRegisterCustomerMutation()

    const [succesfully, setSuccesfully] = useState('')
    const [errorMap, setErrorMap] = useState('')

    async function onSubmit(data: z.infer<typeof registerFormSchema>) {
        let errorocurred = false
        await registerUser(data).unwrap().catch((error) => {
            setErrorMap('The User exists')
            errorocurred = true
        });
        
        if (!errorocurred && data) {
            setErrorMap('')
            setSuccesfully('User registered succesfully')
            router.push('/login')
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-4 px-2 flex flex-col items-center '>
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' type='password'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {succesfully != '' && <div className='text-green-800 text-center font-bold mb-2 text-sm'>{succesfully}</div>}
            {errorMap != '' && <div className='text-red-800 text-center font-bold mb-2 text-sm'>{errorMap}</div>}
            <div className="flex justify-center">
                <Button type="submit" className={'bg-one text-four font-semibold hover:bg-five hover:text-one hover:border-one hover:border-2'}>Register</Button>
            </div>
            </form>
            
        </Form>
    )
}
