import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class LangStorage {

    private _data: object = {};
    get data (): {} {
        return this._data;
    }
    set data ( value: {} ) {
        this._data = value;
    }

    private _activeLang: object = {};
    get activeLang (): {} {
        return this._activeLang;
    }
    set activeLang ( value: {} ) {
        this._activeLang = value;
    }

}
