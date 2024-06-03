"use client"
import React from 'react'
import { Image } from '@nextui-org/react'
import RegisterEmployeeForm from '@/components/forms/RegisterEmployeeForm'
import { titleFonts } from '@/config/fonts'

export default function RegisterEmployee() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-tr from-one to-red-800'>
        <div className='flex flex-col md:flex-row flex-grow'>
            <section className='flex flex-grow md:w-1/2 w-full md:items-center mt-16 md:mt-0'>
                <Image src="https://www.hoyesarte.com/wp-content/uploads/2021/12/sala-de-cine.jpg" className='md:ml-2 border-four border-4' />
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
