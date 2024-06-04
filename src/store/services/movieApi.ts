import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
    endpoints: (builder) => ({

        // mutations
        
        createMovie : builder.mutation({
            query: ({ token, movie }) => ({
              url: 'movies/create',
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
              },
              body: movie,
            }),
        }),

        // querys
        getMovies : builder.query({
            query: () => ({
                url: 'movies',
                method: 'GET',
            })
        }),

        getMovieById : builder.query({
            query: ({id, token}) => ({
                url: `movies/${id}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
        }),

        getMovieNow : builder.query({
            query: ({title, token}) => ({
                url: `movies/movienow/${title}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        })

    }),
});

export const { useCreateMovieMutation, useGetMoviesQuery, useGetMovieByIdQuery,
    useGetMovieNowQuery
}
 = movieApi;