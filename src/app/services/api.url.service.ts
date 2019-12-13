import { Injectable }  from "@angular/core";
import { LangService } from "./lang.service";

import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ApiUrlService {

    constructor (
        private langService: LangService
    ) {}

    private apiDomain: string = 'https://ion.ua';
    private apiLang: string = 'api/index';
    private apiContent: string = 'api/pages';

    //https://ion.ua/api/pages/main

    /** apiUrlLang */
    private _apiUrlLang: string = '';
    get apiUrlLang (): string {
        return this._apiUrlLang;

    }

    /** apiUrlContent */
    private _apiUrlContent: string = '';
    get apiUrlContent (): string {
        return this._apiUrlContent;

    }

    /**
     * @param url
     */
    public checkApiUrl( url: string ) {
        if ( url !== '/' ) {
            let urlObj = ( url[0] === '/' ) ? url.substr( 1 ).split( '/' ) : url.split( '/' );
            if ( this.langService.lang === urlObj[0] ) {
                urlObj.splice( 0, 1 );

            }

            if ( urlObj.length < 1 ) {
                urlObj.push( 'main' );

            }
            url = urlObj.join( '/' );

        } else {
            url = 'main';

        }

        if ( this.langService.lang ) {
            this._apiUrlLang = this.apiDomain + '/' + this.langService.lang + '/' + this.apiLang;
            this._apiUrlContent = this.apiDomain + '/' + this.langService.lang + '/' + this.apiContent + '/' + url;

        } else {
            this._apiUrlLang = this.apiDomain + '/' + this.apiLang;
            this._apiUrlContent = this.apiDomain + '/' + this.apiContent + url;

        }
        return this;

    }

}
