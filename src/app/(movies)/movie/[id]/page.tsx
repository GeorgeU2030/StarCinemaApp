"use client"
import { notFound } from "next/navigation";
import { FunctionPicker, MovieBanner, MovieInfo } from "@/components";
import { useParams } from "next/navigation";
import { useGetMovieByIdQuery } from "@/store/services/movieApi";
import { Spinner } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { clearUser } from "@/store/slices/userSlice";
import { RootState } from "@/store";
import Trailer from "@/components/trailer/Trailer";

export default function MoviePage() {
  
  const { id } = useParams();
  const token = useSelector((state:RootState) => state.user.token);

  const { data: movie , isLoading, error} = useGetMovieByIdQuery({ id, token });
  const dispatch = useDispatch();

  if (isLoading) {
  return <div className="flex justify-center items-center"><Spinner
  color="warning"/></div>
  }

  if(!isLoading && error && !movie){
    notFound()
  }

  if (error){
      dispatch(clearUser())
      Cookies.remove("token")
  }

  return (
    <div>
      {movie && (
      <>
      <div className="text-center">
        <h1 className="text-base py-3 md:text-3xl font-bold text-one">{movie.title}</h1>
      </div>
      <div className="flex flex-col md:flex-row mb-10">
        <div className="w-full md:w-1/2 flex md:flex-col items-center bg-gradient-to-r from-three via-four to-five rounded-lg border-2 border-one">
            <MovieBanner movie={movie}/>
            <MovieInfo movie={movie}/>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
            <Trailer idyoutube={movie.trailer}/>
            <FunctionPicker id={movie.id}/>
        </div>
      </div>
      </>
      )}
    </div>
  );
}
