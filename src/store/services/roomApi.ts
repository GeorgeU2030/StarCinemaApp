import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get } from "http";

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
    endpoints: (builder) => ({

        // mutations

        createRoom : builder.mutation({
            query: ({ token, room }) => ({
                url: 'rooms/create',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: room,
            })
        }),

        createFunction : builder.mutation({
            query: ({ token, func }) => ({
                url: 'functions/create',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: func,
            })
        }),

        // queries

        getAvailableRooms: builder.query({
            query: ({ token, datestring }) => ({
                url: `functions/roomsAvailable/${datestring}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
        }),
   
    })
});

export const { useCreateRoomMutation, useCreateFunctionMutation, useGetAvailableRoomsQuery} = roomApi;