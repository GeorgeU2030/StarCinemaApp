"use client"
import React from 'react'
import { useGetMovieFunctionsQuery } from '@/store/services/movieApi'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Movie } from '@/interfaces'

export default function Functions() {

  const token = useSelector((state: RootState) => state.user.token)
  const { data, error } = useGetMovieFunctionsQuery({token})

  return (
    <div className='min-h-screen bg-gradient-to-r from-one to-orange-400 flex items-center justify-center'>
          {data && (
            <table>
              <thead>
                <tr>
                  <th className='w-72 text-center h-12 border-2 border-two  bg-five text-one mb-2'>Title</th>
                  <th className='w-24 ml-2 text-center h-12 border-2 border-two  bg-five text-one mb-2'>Year</th>
                  <th className='w-32 text-center h-12 border-2 border-two  bg-five text-one mb-2'>Premiere Date</th>
                  <th className='w-16 text-center h-12 border-2 border-two  bg-five text-one mb-2'>Rating</th>
                  <th className='w-32 text-center h-12 border-2 border-two  bg-five text-one mb-2'>Duration</th>
                  <th className='w-48 text-center h-12 border-2 border-two  bg-five text-one mb-2'>Functions</th>
                </tr>
              </thead>
              <tbody >
                {data.map((movie: Movie) => (
                  <tr key={movie.id} className='border-2 border-white h-16'>
                    <td className='text-center text-white font-semibold'>{movie.title}</td>
                    <td className='text-center text-white font-semibold'>{movie.year}</td>
                    <td className='text-center text-white font-semibold'>{new Date(movie.premiereDate).toLocaleDateString()}</td>
                    <td className='text-center text-white font-semibold'>{movie.rating}</td>
                    <td className='text-center text-white font-semibold'>{movie.duration} mins.</td>
                    <td className='text-center text-white font-semibold'>
                      {movie.functions && movie.functions.length > 0
                      ? movie.functions.map(func =>
                          `${new Date(func.startTime).toLocaleDateString()} - ${new Date(func.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`
                        ).join('\n')
                      : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
    </div>
  )
}
