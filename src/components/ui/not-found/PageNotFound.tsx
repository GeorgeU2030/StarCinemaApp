import Image from "next/image";
import Link from "next/link";

import { titleFonts } from "@/config/fonts";

export function PageNotFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFonts.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Uups! Pagina no encontrada.</p>
        <p className="font-light">
          <span>Volver a </span>
          <Link
            className="font-normal hover:underline transition-all text-blue-500"
            href="/"
          >
            la página principal
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
}
