import { z } from "zod";

export const roomFormSchema = z.object({
    name : z.string().min(3, {
         message: "Room name must be at least 3 characters"
    })
    .refine(name => /^Room \d+$/.test(name), {
        message: "Room name must be in the format 'Room {number}'"
    }),
    seats : z.string().min(2, {
        message: "Room seats must be at least 2 characters"
    }),
})