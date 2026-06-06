"use server"



const baseURL = process.env.NEXT_BASE_URL

export const ServerMutation = async (path, data) => {

    const res = await fetch(`${baseURL}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })


    return await res.json()


}