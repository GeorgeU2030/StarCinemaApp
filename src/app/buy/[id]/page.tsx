"use client"
import React from 'react'
import { useGetFunctionIdQuery } from '@/store/services/roomApi'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import SecondRoom from '@/components/rooms/SecondRoom'
import ThirdRoom from '@/components/rooms/ThirdRoom'
import FirstRoom from '@/components/rooms/FirstRoom'
import { Button } from '@nextui-org/react'

export default function () {

  const { id } = useParams()
  const token = useSelector((state: RootState) => state.user.token)

  const { data } = useGetFunctionIdQuery({ token, id })

  return (
      <div className='min-h-screen bg-one flex flex-col justify-center items-center'>
      {data && (
          <>
              <h1 className='text-white text-2xl'>{data.movie.title}</h1>
              {data.room.seats === 36 && <SecondRoom view={false}/>}
              {data.room.seats === 49 && <ThirdRoom view={false}/>}
              {data.room.seats === '60' && <FirstRoom view={false}/>}
              <Button >Comprar</Button>
          </>
      )}
      </div>
  )
}
