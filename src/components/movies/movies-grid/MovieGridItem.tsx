"use client";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { Movie } from "@/interfaces";

interface Props {
  movie: Movie;
}

export const MovieGridItem = ({ movie }: Props) => {
  return (
    // Card
    <div className="flex flex-row md:flex-col rounded-md overflow-hidden fade-in w-full md:w-full border bg-gray-100 border-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link href={`/movie/${movie.title}`}>
        <Image
          src={movie.cover}
          alt={movie.title}
          className="object-cover rounded md:h-96 w-28 md:w-full h-36 ml-2 md:ml-0"
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-one font-bold"
          href={`/movie/${movie.title}`}
        >
          {movie.title}
        </Link>
      </div>
    </div>
  );
};
