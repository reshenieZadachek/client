import { $host } from "./index";

export const httpGetProf = async (id) =>{
    const {data} = await $host.get(`profile/${id}`)
    return data
}

