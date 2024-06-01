import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@nextui-org/react'
import { useDispatch } from 'react-redux'
import { clearUser } from '@/store/slices/userSlice'
import { persistor } from '@/store'
import Cookies from 'js-cookie'

export default function SignOut() {

    const session = useSession()
    const dispatch = useDispatch()

    const handleSignOut = async () => {

        dispatch(clearUser())

        await persistor.purge()

        Cookies.remove('token')

        if (session) {
            await signOut({
                callbackUrl: '/'
            })
        }

    }


    return <Button onClick={handleSignOut}>Sign Out</Button>
}
