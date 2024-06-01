"use client"
import { Spinner } from '@nextui-org/react'
import React from 'react'

export default function PageLoading() {
  return (
    <div className='min-h-screen bg-one flex justify-center items-center'>
        <Spinner size='lg' color='warning'/>
        <div>Loading ...</div>
    </div>
  )
}
