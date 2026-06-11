"use server"
import { ServerFatch, ServerMutation } from "../core/server"




export const AddApplication = async (applicatios) => {
    return ServerMutation('/api/application', applicatios)
}


export const getApplicationbyApplicantId = async (applicantId) => {
    return ServerFatch(`/api/application?applicantId=${applicantId}`)
}