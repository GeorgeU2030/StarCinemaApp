import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@nextui-org/react'
import { useDispatch } from 'react-redux'
import { clearUser } from '@/store/slices/userSlice'
import { persistor } from '@/store'
import Cookies from 'js-cookie'
import PageLoading from '../ui/not-found/PageLoading'

export default function SignOut() {

    const session = useSession()
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)

    const handleSignOut = async () => {

    setLoading(true); 

    try {
      
      dispatch(clearUser());

      
      await persistor.purge();

     
      Cookies.remove('token');

      
      if (session) {
        await signOut({
          callbackUrl: '/' 
        });
      }
    } catch (error) {
      console.error('Error durante el logout:', error);
    } finally {
      setLoading(false); 
    }

    }


    return (
        <div>
        {loading ? ( 
            <PageLoading/>
        ) : (
            <Button
            onClick={handleSignOut}
            className="bg-one text-four border-five border-2 font-semibold md:mr-3 mr-0"
            >
            Sign Out
            </Button>
        )}
        </div>
    )
}
