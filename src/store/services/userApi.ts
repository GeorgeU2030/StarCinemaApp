import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
          query: (credentials) => ({
            url: 'auth/login',
            method: 'POST',
            body: credentials,
          }),
        }),
    }),
});

export const {useLoginUserMutation} = userApi;
