import { MovieGrid, Title } from "@/components";
import { Movie } from "@/interfaces";
import { initialData } from "@/seed/seed";

const movies = initialData.movies;

export default function MoviesPage() {
  return (
    <>
      <Title title="All Movies" className="mb-10 pt-2 ps-8" />
      <MovieGrid movies={movies} />
    </>
  );
}
