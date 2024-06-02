import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { FunctionPicker, MovieBanner, MovieInfo, Title } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

const movies = initialData.movies;

export default function MoviePage({ params }: Props) {
  const { slug } = params;
  const movie = movies.find((movie) => movie.id === slug);

  if (!movie) {
    notFound();
  }

  return (
    <div>
      <MovieBanner movie={movie} />
      <div className="flex space-x-12">
        <MovieInfo movie={movie} />
        <FunctionPicker />
      </div>
    </div>
  );
}
