import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
        })
    }),
});

export const { useCreateRoomMutation } = roomApi;