import React, { useEffect } from 'react'

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
import { Image, Select, SelectItem } from '@nextui-org/react'
import { useCreateMovieMutation } from '@/store/services/movieApi'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { clearUser } from '@/store/slices/userSlice'
import Cookies from 'js-cookie'

export default function MovieForm() {

    const form = useForm<z.infer<typeof movieFormSchema>>({
        resolver: zodResolver(movieFormSchema),
        defaultValues: {
            title: "",
            year: "2024",
            premiereDate: "",
            rating: "",
            isprox: "No",
            cover: "",
            duration: "90",
            genres: "",
            trailer: ""
        },
    })

    const [createMovie, { error }]= useCreateMovieMutation()
    const token = useSelector((state: RootState) => state.user.token)
    const dispatch = useDispatch()

    const [imageUrl, setImageUrl] = React.useState<string>("")
    const [successCreation, setSuccessCreation] = React.useState(false)

    
    useEffect(()=>{
        if (error && 'status' in error && error.status === 401) {
            dispatch(clearUser());
            Cookies.remove("token");
        }
    }, [error, dispatch])


    async function onSubmit(data: z.infer<typeof movieFormSchema>) {
        const {year, premiereDate, isprox, duration, genres, ...restOfData} = data

        let IsProx = false

        if(data.isprox === "Yes"){
            IsProx = true
        }

        const Year = Number(data.year)
        const PremiereDate = new Date(data.premiereDate)
        const Duration = Number(data.duration)
        const Genres = data.genres.split(",")

        const movie = {
            ...restOfData,
            year: Year,
            premiereDate: PremiereDate,
            isprox: IsProx,
            duration: Duration,
            genres: Genres
        }

        try{
            const moviecreated = await createMovie({token,movie});
            if(moviecreated){
                setSuccessCreation(true)
                setImageUrl("")
                form.reset()
            }
        }catch (error: any) {
            console.log(error)
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4 py-4 px-2 flex flex-col items-center'>
            <div className='flex flex-col md:flex-row w-full'>
            <div className='flex flex-col items-center w-full md:w-1/2 '>
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem className='w-5/6'>
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
                    <FormItem className='w-5/6'>
                        <FormLabel className='font-semibold text-one'>Year</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' type='number' min={2024}/>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="premiereDate"
                render={({ field }) => (
                    <FormItem className='w-5/6'>
                        <FormLabel className='font-semibold text-one'>Premiere Date</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' placeholder='mm/dd/yyyy'/>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                    <FormItem className='w-5/6'>
                        <FormControl>
                        <Select placeholder='Select a Rating' label="Rating" {...field} className='mt-5 text-one border-2 border-one rounded-lg' size='sm'>
                            <SelectItem key={"G"} value="G" >G</SelectItem>
                            <SelectItem key={"PG"} value="PG" >PG</SelectItem>
                            <SelectItem key={"PG-13"} value="PG-13" >PG-13</SelectItem>
                            <SelectItem key={"R"} value="R" >R</SelectItem>
                        </Select>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="isprox"
                render={({ field }) => (
                    <FormItem className='w-5/6'>
                        <FormControl>
                            <Select label="Is Coming" defaultSelectedKeys={["1"]} {...field} className='mt-5 text-one border-2 border-one rounded-lg ' size='sm' >
                                <SelectItem key={"Yes"} value="Yes" >Yes</SelectItem>
                                <SelectItem key={"No"} value="No" >No</SelectItem>
                            </Select>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="trailer"
                render={({ field }) => (
                    <FormItem className='w-5/6'>
                        <FormLabel className='font-semibold text-one'>Trailer</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' placeholder='Enter the YoutubeId'/>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            </div>

            <div className='flex flex-col items-center justify-center w-full md:w-1/2'>
            <FormField
                control={form.control}
                name="cover"
                render={({ field }) => (
                    <FormItem className='w-5/6 text-center'>
                        <FormLabel className='font-semibold text-one'>Cover</FormLabel>
                        <FormControl>
                            <div className='flex flex-col justify-center items-center'>
                            <Image src={imageUrl} isZoomed fallbackSrc = "https://via.placeholder.com/300x500" alt="newimage" className='h-36 w-28'/>
                            <Input {...field} className='border-2 border-two text-end mt-4'
                            placeholder='Enter a URL for the cover image'
                            onChange={(e)=> {
                                field.onChange(e);
                                setImageUrl(e.target.value);
                            }}
                            /> 
                            </div>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                    <FormItem className='w-5/6 mt-5'>
                        <FormLabel className='font-semibold text-one'>Duration</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end' type='number'/>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="genres"
                render={({ field }) => (
                    <FormItem className='w-5/6 mt-5'>
                        <FormLabel className='font-semibold text-one'>Genders</FormLabel>
                        <FormControl>
                            <Input {...field} className='border-2 border-two text-end'/>
                        </FormControl>
                        <FormMessage className='font-semibold text-center'/>
                    </FormItem>
                )}
            />
            
            </div>

            </div>
            <div className="flex justify-center w-1/2 md:w-1/6">
                <Button type="submit" className={'w-full bg-one text-four font-semibold hover:bg-five hover:text-one hover:border-one hover:border-2'}
                >Create Movie</Button>
            </div>
            </form>
            {successCreation && <div className='text-green-800 text-center font-bold mb-2 mt-2'>The movie has been created succesfully</div>}
        </Form>
    )
}
