"use client"
import React from 'react'
import { Image } from '@nextui-org/react'
import RegisterEmployeeForm from '@/components/forms/RegisterEmployeeForm'
import { titleFonts } from '@/config/fonts'

export default function RegisterEmployee() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-tr from-one to-red-800'>
        <div className='flex flex-col md:flex-row flex-grow'>
            <section className='flex flex-grow flex-col md:w-1/2 w-full md:items-center justify-center mt-16 md:mt-0'>
                <h1 className='mb-10 text-2xl text-four font-semibold'>Our Comunnity in StarCinema Increases!</h1>
                <div className='flex w-5/6 h-1/2 mt-4'>
                <Image src="https://as1.ftcdn.net/v2/jpg/01/75/60/00/1000_F_175600052_89aGVC2DeX2faAN8LRrtZ7OqJK73open.jpg" className=' border-four border-4 w-full h-full' />
                </div>
                
            </section>
            <section className='flex flex-grow md:w-1/2 w-full md:items-center justify-center '>
                <div className='bg-five w-5/6 md:w-3/5 rounded-lg mt-6 mb-6'>
                    <h1 className={`${titleFonts.className} text-center mt-3 text-one font-semibold text-lg`}>Register Employee</h1>
                    <RegisterEmployeeForm />
                </div>
            </section>
        </div>
    </div>
  )
}
