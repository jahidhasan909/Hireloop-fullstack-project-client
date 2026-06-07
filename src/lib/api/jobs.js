import { ServerFatch } from "../core/server"

const baseURL = process.env.NEXT_BASE_URL

export const getCompanyJobs = async (companyId, status = 'active') => {

    const res = await fetch(`${baseURL}/api/job?companyId=${companyId}&status=${status}`)
    return await res.json()
}



export const getJobs = async () => {
    return ServerFatch('/api/job')
}

export const getJobssingle = async (id) => {
    return ServerFatch(`/api/job/${id}`)
}