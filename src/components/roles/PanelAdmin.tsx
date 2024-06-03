import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { LuPopcorn } from 'react-icons/lu'
import { MdLocalMovies, MdMeetingRoom } from 'react-icons/md'

interface PanelAdminProps {
    email:string
    role: string
}

export default function PanelAdmin({email, role}: PanelAdminProps ) {

    const router = useRouter()

  return (
    <div className="text-black py-2 ml-2 md:ml-12 mt-3 flex flex-col md:w-1/2">
      <span className="font-bold text-one">Welcome, {email}</span>
      <span className="font-bold"><span className="text-one">Role:</span> {role.charAt(0).toUpperCase() + role.slice(1)}</span>
      <p className="font-semibold">What would you like to do today?</p>
      <div className="flex mt-2">
        <Button startContent={<FaPlusCircle className="text-four" size={20}/>}
        className="bg-one text-four font-semibold border-three border-2 mr-2 "
        onClick={()=>router.push('/new_employee')}
        > Employee</Button>

        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered"
              startContent={<LuPopcorn className="text-four" size={24}/>}
              className="bg-one text-four font-semibold border-three border-2 mr-2 " 
            >
              Cinema
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new_movie" startContent={<MdLocalMovies className="text-one" size={24}/>} > <div className="font-semibold " onClick={()=>router.push('/new_movie')}>New Movie</div></DropdownItem>
            <DropdownItem key="new_room" startContent={<MdMeetingRoom className="text-one" size={24}/>}> <div className="font-semibold " onClick={()=>router.push('/new_room')}>New Room</div></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
      </div>
    </div>
  )
}
