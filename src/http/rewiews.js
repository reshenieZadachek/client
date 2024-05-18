import { $host } from "./index";

export const httpGetRewiews = async (page, limit) =>{
    const {data} = await $host.get(`api/rewiews?page=${page}&limit=${limit}`, )
    return data
}
export const httpPostRewiew = async (postus) =>{
    try{
        const {data} = await $host.post(`api/rewiews`, postus)
        return data
    }
    catch (e) {
        const mas = e.response.data.message
        return mas
    }
    
}

