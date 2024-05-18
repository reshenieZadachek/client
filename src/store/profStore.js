import { makeAutoObservable } from 'mobx'
export default class ProfStore{
    constructor() {
        this._login = ''
        this._avatar = ''
        makeAutoObservable(this)
    }

    setLogin(login) {
        this._login = login
    }
    setAvatar(avatar) {
        this._avatar = avatar
    }
    get login() {
        return this._login
    }
    get avatar() {
        return this._avatar
    }
}