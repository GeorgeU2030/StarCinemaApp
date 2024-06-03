import { Button } from '@nextui-org/react'
import React from 'react'
import YouTube from 'react-youtube'
import { useMediaQuery } from 'react-responsive'

export default function Trailer({idyoutube} : {idyoutube: string}) {

    const isMdOrLarger = useMediaQuery({ minWidth: 768 })

    const options = { 
        height: isMdOrLarger ? "300" : "200", 
        width: isMdOrLarger ? "500" : "330", 
        playerVars: { 
          autoplay: 1, 
        }, 
    }; 

    const onReady = (event:any) => {
        event.target.pauseVideo()
    }

  return (
    <div className='flex flex-col items-center w-full'>
        <Button className='bg-one text-white font-bold text-sm w-32 mt-8 md:mt-3 mb-3' disabled>Trailer</Button>
        <YouTube videoId={idyoutube} opts={options} onReady={onReady}/>
    </div>
  )
}
