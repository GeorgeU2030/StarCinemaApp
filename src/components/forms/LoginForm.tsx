import React, {useEffect} from 'react'

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
import { loginFormSchema } from '@/schemas/loginformschema'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

// imports for the Redux and token
import { useLoginUserMutation, useFindByEmailQuery } from '@/store/services/userApi'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setUser, setToken } from '@/store/slices/userSlice'

export default function LoginForm() {

    // Form Hook
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email:"",
            password:"",
        },
    }) 

    // Redux LoginUser Mutation
    const [loginUser, { data, error }] = useLoginUserMutation()
    const dispatch = useDispatch()

    // Redux FetchUserByEmail Query
    const [userEmail, setUserEmail] = React.useState('')
    const { data: userData, error: userError } = useFindByEmailQuery(userEmail, { skip: userEmail === '' })

    // Variables
    const [errorState, setErrorState] = React.useState('')
    const router = useRouter()

    // useEffect - Redirect 

    useEffect(()=>{
        if(userData){
            dispatch(setUser({ user: userData, role: userData.role }))
            dispatch(setToken(Cookies.get('token') || null))
            router.push('/')
        } else if(userError){
            console.log(userError)
        }
    }, [userData, userError, dispatch, router])

    // OnSubmit Function - Login User
    async function onSubmit(formdata: z.infer<typeof loginFormSchema>) {
        try {
            const loginResponse = await loginUser(formdata).unwrap();
            setErrorState('');
            Cookies.set('token', loginResponse.access_token);
            setUserEmail(formdata.email);
        } catch (error: any) {
            if (typeof error.status === 'number') {
                if (error.status === 401) {
                    setErrorState('Invalid Credentials');
                } else {
                    setErrorState('The user does not exist');
                }
            } else {
                setErrorState('An unknown error occurred');
            }
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4 py-4 px-2 flex flex-col items-center'>
            <div className='flex flex-col w-1/2'>
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='font-semibold text-one'>Email</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' />
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='font-semibold text-one'>Password</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' type='password'/>
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
            {errorState != '' && <div className='text-red-500 text-center font-bold mb-2'>{errorState}</div>}
        </Form>
    )
}
