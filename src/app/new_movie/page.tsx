"use client"
import MovieForm from '@/components/forms/MovieForm'
import React from 'react'
import { MdLocalMovies } from 'react-icons/md'
import { Image } from '@nextui-org/react'
import { titleFonts } from '@/config/fonts'
import { useRouter } from 'next/navigation'

export default function NewMovie() {

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
            <h1 className='flex text-center items-center mt-2 text-xl text-one font-semibold'>New Movie <MdLocalMovies/> </h1>
            <MovieForm/>
        </div>
    </div>
  )
}
