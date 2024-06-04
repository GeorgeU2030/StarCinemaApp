"use client"
import { Input } from '@/components/ui/input'
import { Button, Image, DateInput } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { useGetMovieNowQuery } from '@/store/services/movieApi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { Movie } from '@/interfaces';
import Cookies from 'js-cookie';
import { clearUser } from '@/store/slices/userSlice';
import { useRouter } from 'next/navigation';


export default function NewFunction() {


    const today = new Date();
    const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const [inputValue, setInputValue] = React.useState('')
    const [execute, setExecute] = React.useState(false)
    const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null)
    const [date, setDate] = React.useState(dateString)
    const [time, setTime] = React.useState('14:00')
    const router = useRouter()

    const token = useSelector((state: RootState) => state.user.token)
    const { data, error,  } = useGetMovieNowQuery({title: inputValue, token}, {skip: !execute})
    const dispatch = useDispatch()

    const handleSearch = () => {
        setExecute(true)
    }

    useEffect(()=>{
      if (error && 'status' in error && error.status === 401) {
          dispatch(clearUser());
          Cookies.remove("token");
          router.push('/')
      }
    }, [error, dispatch])

    async function searchDate(date: string, time: string) {
        const dateTimeString = `${date}T${time}:00`;
        console.log(dateTimeString)
        
    }


  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex md:flex-row flex-col h-[50vh]'>
          <div className='flex flex-col items-center justify-center w-full md:w-1/2 h-full'>
              <div className='bg-gradient-to-r from-one to-four px-3 py-1 rounded-lg border-2 border-four'>
              <h1 className='mt-2 text-white font-bold text-center'>Movie</h1>
              <div className='md:w-72 flex mt-2'>
              <Input placeholder='Enter the name of the movie' className='border-2 border-one'
              value={inputValue} onChange={(e) => setInputValue(e.target.value)}
              />
              <Button isIconOnly className='bg-one ml-1'
              onClick={handleSearch}
              >
                <FaSearch className='text-white' size={20}/>
              </Button>
              </div>

              <div className='mt-4 md:w-72 max-h-26 overflow-x-auto'>

                <h1 className='text-one bg-five rounded-lg py-1 px-1 font-semibold text-center border-2 border-two'>Movies Founded</h1>
                <table className='w-full mt-5 rounded-lg border-2 border-two bg-five cursor-pointer'>
                  <tbody>
                    {data ? (
                      <tr className='text-center h-24' onClick={()=> setSelectedMovie(data)}>
                          <td className='font-semibold'>{data.title}</td>
                      </tr>
                    ) : (
                      <tr className='text-center font-semibold h-24'>
                        <td>No results found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full md:w-1/2 h-full'>
              <div className='flex flex-col bg-five px-4 py-5 border-2 rounded-lg border-two items-center justify-center'>
                <h1 className='font-semibold text-lg text-one text-center'>Enter the date to see availability</h1>
                <input type="date" defaultValue={dateString} min={dateString} className='mt-3 border-2 w-3/4 border-one rounded-lg text-center py-2 px-4'
                onChange={(e) => setDate(e.target.value)}
                />
                <input type="time" defaultValue={"14:00"} className='mt-3 border-2 border-one rounded-lg w-3/4 py-2 text-center' 
                onChange={(e) => setTime(e.target.value)}
                />
                <Button className='bg-two text-white mt-3 font-semibold'
                onClick={()=>searchDate(date, time)}
                >
                    Search
                </Button>
              </div>
              
          </div>
      </div>
      <div className='flex md:flex-row flex-col h-[50vh]'>
          <div className='bg-yellow-600 flex flex-col w-full md:w-1/2 h-full'>
            como vas
          </div>
          <div className='flex flex-col items-center justify-center w-full md:w-1/2 h-full'>
              <h1 className='text-center text-one font-semibold mb-3'>Your Function is:</h1>
              <div className='flex'>
                    {selectedMovie ? (
                        <div className='flex flex-row items-center bg-five rounded-lg border-2 border-two px-3 '>
                            <Image src={selectedMovie.cover} alt={selectedMovie.title} className='h-40 w-28'/>
                            <p className='font-semibold ml-2'>{selectedMovie.title}</p>
                        </div>
                    ): (
                      <div className='flex justify-center items-center h-24 mt-4 bg-five rounded border-2 border-two px-3'>
                        <p className='font-semibold'>No movie selected</p>
                      </div>
                        
                    )}
              </div>
          </div>
      </div>
    </div>
  )
}
