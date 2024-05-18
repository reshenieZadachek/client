import { makeAutoObservable } from 'mobx'
export default class UserStore{
    constructor() {
        this._isAuth = false
        this._Lead = 0
        this._useLead = 0
        this._progress = 0
        this._isVisible = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setIsVisible(bool){
        this._isVisible = bool
    }
    setUser(user){
        this._user = user
    }
    setLead(lead){
        this._Lead = lead
    }
    setUseLead(lead){
        this._useLead = lead
    }
    setProgress(progress){
        this._progress = progress
    }

    get isAuth(){
        return this._isAuth
    }
    get isVisible(){
        return this._isVisible
    }
    get User(){
        return this._user
    }
    get Lead(){
        return this._Lead
    }
    get useLead(){
        return this._useLead
    }
    get progress(){
        return this._progress
    }
}