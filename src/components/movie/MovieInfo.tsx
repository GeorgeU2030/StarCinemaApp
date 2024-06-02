import { Movie } from "@/interfaces";

interface Props {
  movie: Movie;
}

export const MovieInfo = ({ movie }: Props) => {
  return (
    <div className="flex flex-col space-y-4 w-3/12 h-fit ms-14 mt-12 p-5 bg-slate-100 rounded-lg shadow-lg">
      <p className="text-lg">
        <strong>Duration:</strong> {movie.runtime} mins
      </p>
      <p className="text-lg">
        <strong>Rating:</strong> {movie.rating} ⭐
      </p>
      <p className="text-lg">
        <strong>Release Date:</strong> {movie.releaseDate}
      </p>
      <p className="text-lg">
        <strong>Genres:</strong> {movie.genres.join(", ")}
      </p>
      <p className="text-lg">
        <strong>Overview:</strong> {movie.description}
      </p>
    </div>
  );
};
