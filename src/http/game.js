import { $authhost, $host } from "./index";

export const httpGetDiscount = async (id) =>{
    const {data} = await $authhost.get(`user/getLead/${id}`)
    return data
}
export const httpGetStat = async () =>{
    const {data} = await $host.get(`st/`)
    return data
}

