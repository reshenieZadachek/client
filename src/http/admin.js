import { $authhost, $host } from "./index";

export const httpGetBanUser = async (id) =>{
    const {data} = await $authhost.get(`admin/getbanpeople/${id}`)
    return data
}
export const httpGetBalUser = async (id) =>{
    const {data} = await $authhost.get(`admin/getbalpeople/${id}`)
    return data
}
export const httpPostUserBan = async (postus) =>{
    const {data} = await $authhost.post(`admin/banpeople`, postus)
    return data
}
export const httpPostUserBal = async (postus) =>{
    const {data} = await $authhost.post(`admin/balpeople`, postus)
    return data
}
export const httpPostRewiewDel = async (postus) =>{
    try{
        const {data} = await $authhost.post(`admin/deleterew`, postus)
        return data
    }
    catch (e) {
        const mas = e.response.data.message
        return mas
    }
    
}

