import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { Title } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

const movies = initialData.movies;

export default function MoviePage({ params }: Props) {
  const { slug } = params;
  const movie = movies.find((movie) => movie.slug === slug);

  if (!movie) {
    notFound();
  }

  return (
    <>
      <Title title={movie?.title} className="mb-2 ps-8" />
    </>
  );
}
