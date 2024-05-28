"use client";

import { useSession, signIn, signOut } from "next-auth/react"
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  
    const { data: session } = useSession()
    const router = useRouter()

    if (session) {
            router.push('/')
    }

    return (
        <Button endContent={<Image src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" width={20} height={20}/>} onClick={() => signIn('google')}
        className="bg-white text-two font-semibold border-2 border-two"
        >Sign in with </Button>    
    )

}