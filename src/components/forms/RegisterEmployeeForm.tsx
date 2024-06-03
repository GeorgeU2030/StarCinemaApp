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
import { employeeFormSchema } from '@/schemas/employeeFormSchema'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useRegisterEmployeeMutation } from '@/store/services/userApi'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterEmployeeForm() {

    const form = useForm<z.infer<typeof employeeFormSchema>>({
        resolver: zodResolver(employeeFormSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            lastname: "",
            location: "",
            timeContract: "",
        },
    }) 

    const router = useRouter()

    const [registerEmployee, { data, error }] = useRegisterEmployeeMutation()

    const [successfully, setSuccessfully] = useState('')
    const [errorMap, setErrorMap] = useState('')

    async function onSubmit(data: z.infer<typeof employeeFormSchema>) {
        let errorOccurred = false
        await registerEmployee(data).unwrap().catch((error) => {
            setErrorMap('The Employee exists')
            errorOccurred = true
        });
        
        if (!errorOccurred && data) {
            setErrorMap('')
            setSuccessfully('Employee registered successfully')
            router.push('/employee-dashboard')
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
                <FormField
                    control={form.control}
                    name="timeContract"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Time Contract</FormLabel>
                            <FormControl>
                                <Input {...field} className='border-2 border-two text-end' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {successfully != '' && <div className='text-green-800 text-center font-bold mb-2 text-sm'>{successfully}</div>}
                {errorMap != '' && <div className='text-red-800 text-center font-bold mb-2 text-sm'>{errorMap}</div>}
                <div className="flex justify-center">
                    <Button type="submit" className={'bg-one text-four font-semibold hover:bg-five hover:text-one hover:border-one hover:border-2'}>Register</Button>
                </div>
            </form>
            
        </Form>
    )
}
