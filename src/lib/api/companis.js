"use server"


import { getSession } from "../core/sassion"
import { ServerFatch } from "../core/server"




export const getCompanisAll = async () => {
    return ServerFatch(`/api/companies`)
}


export const getCompanis = async (recruiterId) => {

    return ServerFatch(`/api/my/company?recruiterId=${recruiterId}`)
}


export const getCompanyloginrecruiter = async () => {
    const user = await getSession()
    return getCompanis(user?.id)
}