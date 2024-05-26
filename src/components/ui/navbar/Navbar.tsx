"use client";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

import { titleFonts } from "@/config/fonts";

export const NavBar = () => {
  return (
    <nav className="flex px-5 py-1 justify-between items-center w-full shadow-sm">
      <div>
        {/* Logo */}
        <Link href="/">
          <span className={`${titleFonts.className} antialiased font-bold`}>
            StarCinema
          </span>
        </Link>
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
        <Link
          href="/login"
          className="m-2 p-2 rounded-md transition-all hover:bg-blue-400 hover:text-white"
        >
          <span className="cursor-pointer"> Login</span>
        </Link>
      </div>
    </nav>
  );
};
