"use client"
import MovieForm from '@/components/forms/MovieForm'
import React from 'react'
import { MdLocalMovies } from 'react-icons/md'

export default function NewMovie() {
  return (
    <div className='min-h-screen bg-one flex flex-col justify-center items-center'>
        <div className='bg-four w-1/2 flex flex-col items-center rounded-lg '>
            <h1 className='flex text-center items-center mt-2 text-xl text-one font-semibold'>New Movie <MdLocalMovies/> </h1>
            <MovieForm/>
        </div>
    </div>
  )
}
