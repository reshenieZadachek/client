import { $authhost, $host } from "./index";
import {jwtDecode } from "jwt-decode";

export const registration = async (postus) =>{
    const {data} = await $host.post('api/user/registration', postus)
    localStorage.setItem('token', data.token)
    return jwtDecode (data.token)
}

export const login = async (login) =>{
    const {data} = await $host.post('api/user/login', login)
    localStorage.setItem('token', data.token)
    return jwtDecode (data.token)
}

export const check = async () =>{
    try {
        const {data} = await $authhost.get('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwtDecode (data.token)
    } catch (e) {
        const flag = false
        return flag
    }
    
}

export const changeProfImg = async (params) =>{
    const {data} = await $authhost.post('api/user/change/img', params)
    localStorage.setItem('token', data.token)
    return jwtDecode (data.token)
}
export const changeProfCommon = async (params) =>{
    try {
        const {data} = await $authhost.post('api/user/change/common', params)
        localStorage.setItem('token', data.token)
        const mas = [true, jwtDecode(data.token)]
        return mas
    } catch (e) {
        const mas = [false, e]
        return mas
    }
    
}
export const changeProfSecurity = async (params) =>{
    try {
        const {data} = await $authhost.post('api/user/change/security', params)
        localStorage.setItem('token', data.token)
        const mas = [true, jwtDecode(data.token)]
        return mas
    } catch (e) {
        const mas = [false, e]
        return mas
    }
}
export const changeProfOther = async (params) =>{
    const {data} = await $authhost.post('api/user/change/other', params)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}