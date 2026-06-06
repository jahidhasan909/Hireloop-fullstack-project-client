'use server'

import { ServerMutation } from "../core/server"


export const CreatNewJob = async (newjob) => {
    return ServerMutation("/api/job", newjob)

}