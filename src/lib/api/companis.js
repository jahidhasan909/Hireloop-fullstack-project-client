"use server"


import { getSession } from "../core/sassion"
import { ServerFatch } from "../core/server"

export const getCompanis = async (recruiterId) => {

    return ServerFatch(`/api/my/company?recruiterId=${recruiterId}`)
}


export const getCompanyloginrecruiter = async () => {
    const user = await getSession()
    return getCompanis(user?.id)
}