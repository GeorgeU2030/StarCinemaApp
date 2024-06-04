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
import { useGetAvailableRoomsQuery, useCreateFunctionMutation } from '@/store/services/roomApi';
import { Room } from '@/interfaces/Room';
import { MdMeetingRoom } from 'react-icons/md';


export default function NewFunction() {


    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;

    const [inputValue, setInputValue] = React.useState('')
    const [execute, setExecute] = React.useState(false)
    const [executeRooms, setExecuteRooms] = React.useState(false)
    const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null)
    const [date, setDate] = React.useState(dateString)
    const [time, setTime] = React.useState('14:00')
    const [dateTime, setDateTime] = React.useState('')
    const [rooms, setRooms] = React.useState<Room[]>([])
    const [selectedRoom, setSelectedRoom] = React.useState<Room | null>(null)
    const [succesfull, setSuccesfull] = React.useState('')

    const router = useRouter()

    const token = useSelector((state: RootState) => state.user.token)
    const [createFunction] = useCreateFunctionMutation()
    const { data, error,  } = useGetMovieNowQuery({title: inputValue, token}, {skip: !execute})
    const dispatch = useDispatch()

    const handleSearch = () => {
        setExecute(true)
    }

    async function searchDate(date: string, time: string) {
        const dateTimeString = `${date}T${time}:00`;
        setDateTime(dateTimeString)
        setExecuteRooms(true)
    }

    const { data: roomsData, error: roomsError } = useGetAvailableRoomsQuery({token, datestring: dateTime}, {skip: !executeRooms})

    useEffect(()=>{
      if (error && 'status' in error && error.status === 401) {
          dispatch(clearUser());
          Cookies.remove("token");
          router.push('/')
      }
      if(roomsData) {
          setRooms(roomsData)
          setExecuteRooms(false)
      }
    }, [error, dispatch, roomsData])

    async function handleCreateFunction(){

        let minutes = 0 
        if (selectedMovie?.duration){
            minutes = selectedMovie.duration
        }
        const [hour, minute] = time.split(':').map(Number)
        const datenew = new Date(date)
        datenew.setHours(hour,minute)

        datenew.setMinutes(datenew.getMinutes() + minutes)

        const endTime = `${datenew.getHours().toString().padStart(2, '0')}:${datenew.getMinutes().toString().padStart(2, '0')}`;

        const datefinish = new Date();
        const dateTimeString = `${datefinish.toISOString().split('T')[0]}T${endTime}:00`;
        
        const endTimeDate = new Date(dateTimeString);
        const startTimeDate = new Date(dateTime);


        const func = {
            startTime: startTimeDate.toISOString(),
            endTime: endTimeDate.toISOString(),
            movieId: selectedMovie?.id,
            roomId: selectedRoom?.id,
        }

        const functioncreated = await createFunction({token, func}).unwrap()

        if (functioncreated) {
            setSuccesfull('Function created succesfully')
            setTimeout(()=> setSuccesfull(''), 6000)
            router.push('/')
        }

    }

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-one to-orange-400'>
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
                          <td className='font-semibold'>
                             {data.title}
                          </td>
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
          <div className='flex flex-col items-center justify-center w-full md:w-1/2 h-full'>
                <div className='bg-five md:w-72 px-6 py-3 rounded-lg border-2 border-two'>
                    <h1 className='text-center text-two font-semibold'>Rooms Available</h1>
                    <div className='max-h-48 overflow-y-auto '>
                    <table className='w-full mt-5 rounded-lg border-2 border-two bg-five'>
                        <thead>
                            <tr className='text-center'>
                                <th className='font-semibold text-one'>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                          {rooms.length > 0 ? (
                            rooms.map(room => (
                                <tr key={room.id} className='flex justify-center cursor-pointer hover:bg-five h-10 bg-four border-2 border-three' 
                                onClick={()=> setSelectedRoom(room)}
                                >
                                    <td className='font-semibold flex items-center'>
                                    <MdMeetingRoom size={20} className='text-one'/>  {room.name}
                                    </td>
                                </tr>
                            ))
                          ) : (
                           
                              <tr className='text-center h-8'>
                                <td className='font-semibold '>Choose a Date</td>
                              </tr>
                           
                          )}
                        </tbody>
                    </table>
                    </div>
                </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full md:w-1/2 h-full'>
              <h1 className='text-center text-xl text-white font-semibold mb-3'>Your Function is:</h1>
              <div className='flex'>
                    {selectedMovie ? (
                        <div className='flex flex-row items-center py-1 bg-five rounded-lg border-2 border-two px-3 '>
                            <Image src={selectedMovie.cover} alt={selectedMovie.title} className='h-56 w-40 border-2 border-two'/>
                            <div className='flex flex-col'>
                            <p className='font-semibold ml-2'>{selectedMovie.title}</p>
                            <p className='font-semibold ml-2'>{date}</p>
                            <p className='font-semibold ml-2'>{time}</p>
                            {selectedRoom ? (
                                <div className='flex flex-col'>
                                  <p className='font-semibold ml-2'>{selectedRoom.name}</p>
                                  <Button className='bg-one mt-5 ml-2 text-white w-1/3 font-semibold'
                                  onClick={handleCreateFunction}
                                  >Create</Button>
                                  {succesfull != "" && (
                                      <p className='ml-2 font-semibold text-green-700'>{succesfull}</p>
                                  )}
                                </div>
                            ) : (
                                <p className='font-semibold ml-2'>No room selected</p>
                            )}
                            </div>
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
