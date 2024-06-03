"use client";
import Link from "next/link";
import { DividerProps, Image } from "@nextui-org/react";
import { Movie } from "@/interfaces";

interface Props {
  movie: Movie;
}

export const MovieGridItem = ({ movie }: Props) => {
  return (
    // Card
    <div className="flex flex-row md:flex-col rounded-md overflow-hidden fade-in w-full md:w-full border bg-gray-100 border-gray-200 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link href={`/movie/${movie.id}`}>
        <div className="w-28 md:w-full h-36 md:h-96 rounded ml-2 md:ml-0 flex justify-center">
          <Image
            src={movie.cover}
            alt={movie.title}
            className="md:h-96 w-full object-cover"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col text-center">
        <Link
          className="hover:text-one font-bold"
          href={`/movie/${movie.id}`}
        >
          <h1 className="h-12">{movie.title}</h1>
          <div className="text-center">
            <div className="flex text-tiny justify-center">
              <span className="text-one">Premiere:</span>
              <span className="text-gray-900 ml-2">
                {new Date(movie.premiereDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <div className="flex text-tiny justify-center">
              <span className="text-one">Genre:</span>
              <span className="text-gray-900 ml-2">
                {movie.genres.join(", ")}
              </span>
            </div>
            {movie.isprox ? <div className="flex justify-center"><div className="bg-one mt-1 w-1/2 flex justify-center items-center rounded">
              <span className="text-four text-sm">SOON</span>
            </div> </div>: <div className="flex justify-center">
              <div className="bg-four mt-1 w-1/2 flex justify-center items-center rounded-lg">
                <span className="text-one text-sm">NOW</span>
              </div>
            </div> }
          </div>
        </Link>
      </div>
    </div>
  );
};
