
const baseURL = process.env.NEXT_BASE_URL

export const getCompanyJobs = async (companyId, status = 'active') => {

    const res = await fetch(`${baseURL}/api/job?companyId=${companyId}&status=${status}`)
    return await res.json()
}