import { makeAutoObservable } from 'mobx'
export default class RewiewsStore{
    constructor() {
        this._rewiews = []
        this._page = 1
        this._totalCount = 0
        this._limit = 6
        makeAutoObservable(this)
    }

    setRewiews(rewiews) {
        this._rewiews = rewiews
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    get rewiews() {
        return this._rewiews
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}