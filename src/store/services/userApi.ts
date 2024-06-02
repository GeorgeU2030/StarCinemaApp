import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
    endpoints: (builder) => ({

        // mutations
        loginUser: builder.mutation({
          query: (credentials) => ({
            url: 'auth/login',
            method: 'POST',
            body: credentials,
          }),
        }),
        registerCustomer: builder.mutation({
          query: (credentials) => ({
            url: 'auth/register_customer',
            method: 'POST',
            body: credentials,
          }),
        }),

        createMovie : builder.mutation({
          query: ({ token, movie }) => ({
            url: 'movies/create',
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
            body: movie,
          })
        }),

        // querys
        findByEmail: builder.query({
          query: (email) => ({
            url: `users/exist_email?email=${email}`,
            method: 'GET',
          }),
        })
    }),
});

export const {useLoginUserMutation, useRegisterCustomerMutation, useFindByEmailQuery,
  useCreateMovieMutation
} = userApi;
