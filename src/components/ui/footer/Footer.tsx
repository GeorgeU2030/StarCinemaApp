import Link from "next/link";
import { titleFonts } from "@/config/fonts";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span className={`${titleFonts.className} antialiased font-bold`}>
          StarCinema{" "}
        </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        <span>Privacy & Legal</span>
      </Link>

      <Link href="/">
        <span>Locations</span>
      </Link>
    </div>
  );
};
