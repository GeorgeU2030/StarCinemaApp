import { Movie } from "@/interfaces";
import { Image } from "@nextui-org/react";

interface Props {
  movie: Movie;
}

export const MovieBanner = ({ movie }: Props) => {
  return (
    <div>
      <div className="flex md:justify-center w-full mt-2 md:h-96 rounded-xl shadow-lg">
        <div className="h-2/3">
          <Image
            src={movie.cover}
            alt={movie.title}
            className="rounded-lg shadow-lg h-48 md:h-96 w-32 md:w-72 border-2 border-red-600 ml-2 md:ml-0"
          />
        </div>
      </div>
      
    </div>
  );
};
