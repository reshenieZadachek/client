import { $authhost, $host } from "./index";

export const httpGetDiscount = async (id) =>{
    const {data} = await $authhost.get(`api/user/getLead/${id}`)
    return data
}
export const httpGetStat = async () =>{
    const {data} = await $host.get(`api/stat/`)
    return data
}

