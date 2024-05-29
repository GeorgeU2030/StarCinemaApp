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
        registerCustomer: builder.mutation({
          query: (credentials) => ({
            url: 'auth/register_customer',
            method: 'POST',
            body: credentials,
          }),
        }),
        findByEmail: builder.query({
          query: (email) => ({
            url: `users/exist_email?email=${email}`,
            method: 'GET',
          }),
        })
    }),
});

export const {useLoginUserMutation, useRegisterCustomerMutation, useFindByEmailQuery} = userApi;
