import { Button } from '@nextui-org/react'
import React from 'react'
import { LuClapperboard } from "react-icons/lu";
import { useRouter } from 'next/navigation';

interface PanelEmployeeProps {
    email:string
    role: string
}

export default function PanelEmployee({email,role}:PanelEmployeeProps) {

    const router = useRouter()

  return (
    <div className="text-black py-2 ml-2 md:ml-12 mt-3 flex flex-col md:w-1/2">
        <h1 className='text-one font-semibold'>Employee : {email}</h1>
        <p className='text-two font-bold'>Let's Work !</p>
        <p className='font-semibold text-sm mt-2'>Start with the Functions &#128516;</p>
        <Button className='w-32 mt-2 bg-two text-five font-semibold' startContent={<LuClapperboard className='text-four' size={24}/>}
        onClick={()=>router.push('/functions')}
        >
            Functions
        </Button>
    </div>
  )
}
