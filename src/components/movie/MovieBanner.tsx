import Image from "next/image";
import { Movie } from "@/interfaces";

interface Props {
  movie: Movie;
}

export const MovieBanner = ({ movie }: Props) => {
  return (
    <div>
      <div className="flex justify-center w-full bg-slate-100 mt-2 md:h-96 rounded-xl shadow-lg">
        <div className="h-2/3 ms-14 shadow-lg">
          <Image
            src={`/movies/${movie.cover}`}
            alt={movie.title}
            width={520}
            height={500}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full pe-36 ps-10">
          {/* <Trailer/> */}
          <div className="bg-black w-full h-full"></div>
        </div>
      </div>

      <div className="flex justify-center ms-20">
        <div className="w-1/2 p-10">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">{movie.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
