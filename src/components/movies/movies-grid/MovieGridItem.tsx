"use client";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/interfaces";

interface Props {
  movie: Movie;
}

export const MovieGridItem = ({ movie }: Props) => {
  return (
    // Card
    <div className="rounded-md overflow-hidden fade-in w-64 border bg-gray-100 border-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link href={`/movie/${movie.slug}`}>
        <Image
          src={`/movies/${movie.poster}`}
          alt={movie.title}
          className="w-full object-cover rounded h-96"
          width={200}
          height={500}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600 font-bold"
          href={`/movie/${movie.slug}`}
        >
          {movie.title}
        </Link>
      </div>
    </div>
  );
};
