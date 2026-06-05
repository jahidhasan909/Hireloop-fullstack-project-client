'use server'



const baseURL = process.env.NEXT_BASE_URL

export const CreatNewJob = async (newjob) => {

    const res = await fetch(`${baseURL}/api/job`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newjob)
    })


    return await res.json()


}