import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email({
        message: "Enter a valid email address"
    }),
    password: z.string().min(7,{
        message: "must be at least 7 characters"
    })
})