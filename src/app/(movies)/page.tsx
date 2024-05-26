import { MoviesList, Title } from "@/components";
import { Movie } from "@/interfaces";

const movies = [] as Movie[];

export default function MoviesPage() {
  return (
    <>
      <Title title="All Movies" className="mb-2 ps-8" />
      <MoviesList movies={movies} />
    </>
  );
}
