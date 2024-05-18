import { makeAutoObservable } from 'mobx'
export default class MyRoomStore{
    constructor() {
        this._Room = []
        makeAutoObservable(this)
    }
    setMyRoom(Room) {
        this._Room = Room
    }
    get MyRoom() {
        return this._Room
    }
}