"use client"
import LoginForm from '@/components/forms/LoginForm'
import { titleFonts } from '@/config/fonts'
import React from 'react'
import SignIn from '@/components/authjs/SignIn'

export default function Login() {

  return (
    <div className='min-h-screen bg-gradient-to-tr from-one to-red-800 flex'>
        <div className='flex justify-center items-center flex-grow '>
            <div className='w-1/2 bg-five rounded-lg py-3'>
            <h1 className={`${titleFonts.className} text-center text-2xl text-one`}>Login</h1>
                <LoginForm/>
                <div className='flex justify-center'>
                <SignIn/>
                </div>
            </div>
        </div>
    </div>
  )
}
