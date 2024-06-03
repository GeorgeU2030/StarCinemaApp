import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
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
        registerEmployee: builder.mutation({
            query: ({token, credentials}) => ({
                url: 'auth/register_employee',
                method: 'POST',
                body: credentials,
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            }),
        }),

        // queries
        findByEmail: builder.query({
            query: (email) => ({
                url: `users/exist_email?email=${email}`,
                method: 'GET',
            }),
        })

    }),
});

export const { useLoginUserMutation, useRegisterCustomerMutation, useRegisterEmployeeMutation, useFindByEmailQuery } = userApi;
