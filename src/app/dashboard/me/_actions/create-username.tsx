"use server"

import {z} from "zod"

const createUsernameSchema = z.object({
    username: z.string().min(3).max(20)
})

type createUsernameFormData = z.infer<typeof createUsernameSchema>
 
export async function createUsername(data: createUsernameFormData) {

    const schema = createUsernameSchema.safeParse(data)
    if (!schema.success) {
        console.log(schema.error.errors)
        return {
            data: null,
            error: schema.error.errors
        }
    }

    console.log(data.username)
    return {
        data: "USERNAME CRIADO",
        error: null
    }
}