"use server"



const baseURL = process.env.NEXT_BASE_URL



export const ServerFatch = async (path) => {

    const res = await fetch(`${baseURL}${path}`)
    return res.json();
}



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