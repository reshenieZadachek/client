import { $authhost } from "./index";

export const httpGetMyRooms = async (id,price) =>{
    const {data} = await $authhost.get(`api/room/my?id=${id}&price=${price}`)
    return data
}
export const httpPostJoin = async (postus) =>{
    const {data} = await $authhost.post(`api/room/join`, postus)
    return data
}