import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {jwtDecode, JwtPayload} from "jwt-decode";

interface MyToken extends JwtPayload {
    sub: string;
    roles: string;
}


const adminRoutes = ["/new_movie"]

export default function middleware(req: NextRequest){


    if(adminRoutes.includes(req.nextUrl.pathname)){
        
        const token = req.cookies.get("token")?.value;
        if(!token){
            const absoluteURL = new URL("/login", req.nextUrl.origin);
            return NextResponse.redirect(absoluteURL.toString());
        }

        const decoded = jwtDecode<MyToken>(token)

        if(decoded.roles !== "admin"){
            const absoluteURL = new URL("/error", req.nextUrl.origin);
            return NextResponse.redirect(absoluteURL.toString());
        }
    }
}