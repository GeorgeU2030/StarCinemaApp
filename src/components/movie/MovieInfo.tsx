import { Movie } from "@/interfaces";

interface Props {
  movie: Movie;
}

export const MovieInfo = ({ movie }: Props) => {
  return (
    <div>
    
    <div className="flex flex-col ml-2 space-y-1 md:space-y-4 w-52 md:w-72 h-fit mt-2 p-5 mb-4 bg-slate-100 rounded-lg shadow-lg border-2 border-two">
      <p className="text-sm md:text-lg">
        <strong className="text-one">Duration:</strong> {movie.duration} mins
      </p>
      <p className="text-sm md:text-lg">
        <strong className="text-one">Rating:</strong> {movie.rating} ⭐
      </p>
      <p className="text-sm md:text-lg">
        <strong className="text-one text-sm md:text-lg">Premiere:</strong> {new Date(movie.premiereDate).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}
      </p>
      <p className="text-sm md:text-lg">
        <strong className="text-one text-sm md:text-lg">Genres:</strong> {movie.genres.join(", ")}
      </p>
      {/* <p className="text-lg">
        <strong>Overview:</strong> {movie.description}
      </p> */}
    </div>
    </div>
  );
};
