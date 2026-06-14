"use server"
import { revalidatePath } from "next/cache"
import { ServerMutation, ServerMutationPatch } from "../core/server"



export const Newcompany = async (newcompany) => {

    return ServerMutation('/api/company', newcompany)
}

export const UpdatedCompanyStatus = async (id, data) => {

    const result = ServerMutationPatch(`/api/companies/${id}`, data)
    revalidatePath('/Dashboard/admin/companies')
    return result;
}