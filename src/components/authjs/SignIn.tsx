"use client";

import { useSession, signIn, getCsrfToken } from "next-auth/react"
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useFindByEmailQuery, 
useRegisterCustomerMutation
} from "@/store/services/userApi";
import { useEffect, useState, useRef } from "react";
import { generatePassword } from "@/functions/generatePassword";


export default function SignIn() {
  
    const { data: session } = useSession()
    const router = useRouter()
    const findByEmailQuery = useFindByEmailQuery(session?.user?.email);
    const [registerCustomer] = useRegisterCustomerMutation();
    const [isUserChecked, setIsUserChecked] = useState(false);
    const userRegistered = useRef(false);

    useEffect(() => {
        if (session && session.user && findByEmailQuery.data === undefined) {
          console.log('Checking if user exists...');
        }
    }, [session, findByEmailQuery.data]);
    
    useEffect(() => {
        const handleLogin = async () => {
          const user = findByEmailQuery.data;
    
          if (user) {
            router.push('/');
          } else if (!user && !userRegistered.current && !isUserChecked) {
            let firstName = '';
            let lastName = '';
    
            if(session){
                if (session?.user?.name) {
                const name = session.user.name.split(' ');
                firstName = name[0];
                lastName = name[1];
                }
    
                const datauser = {
                email: session.user?.email,
                name: firstName,
                lastname: lastName,
                password: generatePassword(10),
                image: session.user?.image,
                location: ''
                };
    
                try {
                await registerCustomer(datauser).unwrap();
                userRegistered.current = true;
                setIsUserChecked(true);
                router.push('/');
                } catch (error) {
                console.error('Error registering user:', error);
                }
            }
        }
    };
    
    if (session && session.user && findByEmailQuery.data !== undefined) {
          handleLogin();
    }

    }, [session, findByEmailQuery.data, isUserChecked, registerCustomer, router]);
    


    return (
        <Button endContent={<Image src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" width={20} height={20}/>} onClick={() => signIn('google')}
        className="bg-white text-two font-semibold border-2 border-two"
        >Sign in with </Button>    
    )

}