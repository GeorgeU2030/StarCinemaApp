import { z } from "zod";

export const movieFormSchema = z.object({
    title: z.string().min(2,{
        message: "must be at least 2 characters"
    }),
    year: z.number().int().min(2024,{
        message: "must be at least 2024"
    }),
    premiereDate: z.string().min(4,{
        message: "must be at least 4 characters"
    }),
    rating: z.string().min(1),
    isprox: z.boolean(),
    cover: z.string().url({
        message: "must be a valid url"
    }),
    duration: z.number().int().min(2,{
        message: "must be at least 2 characters"
    }),
    genres: z.array(z.string().min(2,{
        message: "must be at least 2 characters"
    })),
    trailer: z.string()
})