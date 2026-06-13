"use server"

import { ServerMutation } from "../core/server"





export const CreateSubscriptions = async (subinfo) => {

    return ServerMutation('/api/subscription', subinfo)
}