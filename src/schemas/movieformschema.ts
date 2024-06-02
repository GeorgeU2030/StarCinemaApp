import { z } from "zod";

export const movieFormSchema = z.object({
    title: z.string().min(2,{
        message: "must be at least 2 characters"
    }),
    year: z.string().min(4,{
        message: "must be at least 2024"
    }),
    premiereDate: z.string().refine(value => /^(\d{2})\/(\d{2})\/(\d{4})$/.test(value), {
        message: "must be in the format dd/mm/yyyy"
    }),
    rating: z.string().min(1),
    isprox: z.string({
        message: "must be a valid url"
    }),
    cover: z.string().url({
        message: "must be a valid url"
    }),
    duration: z.string().min(2,{
        message: "must be at least 2 characters"
    }),
    genres: z.string().min(2,{
        message: "must be at least 2 characters"
    }),
    trailer: z.string()
})