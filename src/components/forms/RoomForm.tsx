import React, {useEffect} from 'react'

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
import ThirdRoom from '../rooms/ThirdRoom'
import { useCreateRoomMutation } from '@/store/services/roomApi'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { clearUser } from '@/store/slices/userSlice'
import Cookies from 'js-cookie'

export default function RoomForm() {

    const [createRoom, { error }] = useCreateRoomMutation();
    const token = useSelector((state: RootState) => state.user.token);
    const dispatch = useDispatch();

    const [selectedRoom, setSelectedRoom] = React.useState<string | null>(null);
    const [successCreation, setSuccessCreation] = React.useState<boolean>(false);

    const form = useForm<z.infer<typeof roomFormSchema>>({
        resolver: zodResolver(roomFormSchema),
        defaultValues: {
        name:"",
        seats:"",
        },
    })

    useEffect(()=>{
        if (error && 'status' in error && error.status === 401) {
            dispatch(clearUser());
            Cookies.remove("token");
        }
    }, [error, dispatch])


    async function onSubmit(values: z.infer<typeof roomFormSchema>) {
        const room = {
            name: values.name,
            seats: values.seats,
            isAvailable: true,
        }
        try {
            const roomCreated = await createRoom({ token,room});
            if(roomCreated){
                setSuccessCreation(true);
                form.reset();
                setTimeout(()=>setSuccessCreation(false), 3000)
            }
        }catch(error:any){
            console.log(error)
        }
    }


  return (
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4 py-4 px-2 flex flex-col items-center'>
            <div className='flex flex-col md:flex-row w-4/5 md:w-1/2'>
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
                    <FormItem className='ml-0 md:ml-4'>
                        <FormLabel className='font-semibold text-one'>Number of Seats</FormLabel>
                        <FormControl>
                        <Select onValueChange={(value: string) => {setSelectedRoom(value); field.onChange(value)}} >
                            <SelectTrigger className="w-full md:w-48 border-2 border-one">
                                <SelectValue placeholder="Select the Number" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Seats</SelectLabel>
                                <SelectItem value="36" >36 Seats - Small</SelectItem>
                                <SelectItem value="49" >49 Seats - Medium</SelectItem>
                                <SelectItem value="60" >60 Seats - Large</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            </div>

            <div className='flex overflow-x-auto md:max-w-full max-w-64'>
                {selectedRoom === '36' && <SecondRoom view={true}/>}
                {selectedRoom === '49' && <ThirdRoom view={true}/>}
                {selectedRoom === '60' && <FirstRoom view={true}/>}
            </div>

            <div className="flex justify-center w-1/2 md:w-1/6">
                <Button type="submit" className={'w-full bg-one text-four font-semibold hover:bg-five hover:text-one hover:border-one hover:border-2'}>Create Room</Button>
            </div>
            </form>
            {successCreation && <div className='text-green-800 text-center font-bold mb-2 mt-2'>The room has been created succesfully</div>}
        </Form>
  )
}
