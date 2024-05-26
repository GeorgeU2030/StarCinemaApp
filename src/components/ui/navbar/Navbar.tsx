"use client";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

import { titleFonts } from "@/config/fonts";

export const NavBar = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        {/* Logo */}
        <Link href="/">
          <span className={`${titleFonts.className} antialiased font-bold`}>
            StarCinema
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block"></div>

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
