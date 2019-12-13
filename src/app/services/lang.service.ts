import { Injectable }  from "@angular/core";
import { FunctionsServices } from "./functions.service";

import { environment }       from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class LangService {

    constructor (
        private functionsServices: FunctionsServices
    ) {}

    /** host */
    private _host: string = window.location.host;
    get host (): string {
        return this._host;
    }

    /** languages */
    private _languages: object = {
        'ru': 'ru',
        'ua': 'ua',

    };
    get languages (): object {
        return this._languages;
    }

    /** lang */
    private _lang: string = '';
    get lang (): string {
        return this._lang;
    }
    set lang ( value: string ) {
        this._lang = value;
    }

    /**
     * @param url
     */
    public checkLang( url: string ) {
        let urlObj = ( url[0] === '/' ) ? url.substr( 1 ).split( '/' ) : url.split( '/' );
        if ( urlObj.length > 0 ) {
            let keys = this.functionsServices.getKeysObject( this.languages );

            for( let key in keys ) {
                if ( keys.hasOwnProperty( key ) ) {
                    if ( keys[key] === urlObj[0] ) {
                        this.lang = keys[key];
                        return this;

                    }

                }

            }

        }

        if ( environment.production ) {
            for( let key in this.languages ) {
                if ( this.languages.hasOwnProperty( key ) ) {
                    if ( this.host.indexOf( key ) !== -1 ) {
                        this.lang = this.languages[key];
                        return this;

                    }

                }

            }

        }
        this.lang = 'ru';
        return this;

    }


}
