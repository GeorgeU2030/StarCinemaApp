"use client";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { titleFonts } from "@/config/fonts";
import { Image, Button } from "@nextui-org/react";

export const NavBar = () => {
  return (
    <nav className="flex px-5 py-3 justify-between items-center w-full shadow-sm bg-one">
      <div className="flex items-center">
        {/* Logo */}
          <Image src='imgs/star.png' width={32} height={32}/>
          <span className={`${titleFonts.className} antialiased font-bold ml-2 text-four`}>
            StarCinema
          </span>
        
      </div>

      {/* Search bar */}
      <div className="hidden sm:block">
        <div className="flex items-center bg-gray-100 rounded-full p-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-80 pl-2"
          />
          <IoSearchOutline className="text-xl pr-1" />
        </div>
      </div>

      {/* Login */}
      <div className="flex items-center">
        <Button className="md:mr-3 mr-1 bg-one text-four border-five border-2 font-semibold">
          <Link href="/register">Register</Link>
        </Button>
        <Button className="md:mr-3 mr-0 bg-one text-four border-five border-2 font-semibold">
          <Link href="/login">
            <span className={`${titleFonts.className}`}>Login</span>  
          </Link>
        </Button>
      </div>
    </nav>
  );
};
