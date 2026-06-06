"use server"
import { ServerMutation } from "../core/server"



export const Newcompany = async (newcompany) => {

    return ServerMutation('/api/company', newcompany)
}