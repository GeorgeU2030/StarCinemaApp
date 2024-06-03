"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { Image } from '@nextui-org/react'
import { titleFonts } from '@/config/fonts'
import { MdMeetingRoom } from 'react-icons/md'
import RoomForm from '@/components/forms/RoomForm';

export default function NewRoom() {

    const router = useRouter()

  return (
    <div className='min-h-screen bg-one flex flex-col justify-center items-center'>
        <div className='w-full md:w-5/6 mt-3 flex justify-center'>
        <div className="flex justify-center items-center border-2 border-two w-1/2 md:w-1/6 rounded-lg py-2 cursor-pointer"
        onClick={() => router.push('/')}
        >
        {/* Logo */}
            <Image src='imgs/star.png' width={32} height={32}/>
            <span className={`${titleFonts.className} antialiased font-bold ml-2 text-four`}>
            StarCinema
            </span>
        
        </div>
        </div>
        <div className='bg-four w-5/6 md:w-2/3 flex flex-col items-center rounded-lg mb-4 mt-4 '>
            <h1 className='flex text-center items-center mt-2 text-xl text-one font-semibold'>New Room <MdMeetingRoom/> </h1>
            <RoomForm/>
        </div>
    </div>
  )
}
