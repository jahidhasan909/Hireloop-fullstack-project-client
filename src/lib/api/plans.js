import { ServerFatch } from "../core/server"


export const getPlans = async (id) => {

    return ServerFatch(`/api/plans?id=${id}`)
}