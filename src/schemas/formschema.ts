import { z } from "zod";

export const registerFormSchema = z.object({
    email: z.string().email({
        message: "Enter a valid email address"
    }),
    password: z.string().min(7,{
        message: "must be at least 7 characters"
    }),
    name: z.string().min(3,{
        message: "must be at least 3 characters long"
    }),
    lastname: z.string().min(3,{
        message: "must be at least 3 characters long"
    }),
    location: z.string().min(3,{
        message: "must be at least 3 characters long"
    })
})