import { Movie } from "@/interfaces";
import { MovieGridItem } from "./MovieGridItem";

interface Props {
  movies: Movie[];
}

export const MovieGrid = ({ movies }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 mb-10 place-items-center">
      {movies.map((movie) => (
        <MovieGridItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
