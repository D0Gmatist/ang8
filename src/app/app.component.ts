import { Component, OnInit }     from '@angular/core';
import { LangService }           from "./services/lang.service";
import { ApiUrlService }         from "./services/api.url.service";
import { LangStorage }           from "./storage/lang.storage";
import { RestApiServices }       from "./services/rest.api.service";
import { NavigationEnd, Router } from "@angular/router";
import { FunctionsServices }     from "./services/functions.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor (
        private router: Router,
        private langService: LangService,
        private apiUrlService: ApiUrlService,
        private functionsServices: FunctionsServices,
        private langStorage: LangStorage,
        private restApiServices: RestApiServices
    ) {

    }

    ngOnInit (): void {
        this.router.events.subscribe(( n ) => {
            if ( n instanceof NavigationEnd ) {
                this.langService.checkLang( n.url );
                this.apiUrlService.checkApiUrl( n.url );

                console.log( n );
                console.log( 'LANG ', this.langService.lang );
                console.log( 'API_URL_LANG ', this.apiUrlService.apiUrlLang );
                console.log( 'API_URL_CONTENT ', this.apiUrlService.apiUrlContent );

                console.log( this.langStorage.data );
                console.log( this.functionsServices.dataTypeOf( this.langStorage.data ) );

                if ( this.functionsServices.dataTypeOf( this.langStorage.data[this.langService.lang] ) != 'object' ) {
                    console.log( 'NEW LANG' );
                    this.restApiServices.getRow( this.apiUrlService.apiUrlLang ).subscribe( data => {
                        this.langStorage.data[this.langService.lang] = data;
                        this.langStorage.activeLang[this.langService.lang] = this.functionsServices.dataClone( this.langStorage.data[this.langService.lang] );

                    });

                } else {
                    console.log( 'CHANGE LANG' );
                    this.langStorage.activeLang[this.langService.lang] = this.functionsServices.dataClone( this.langStorage.data[this.langService.lang] );

                }

            }

        });

    }

}
