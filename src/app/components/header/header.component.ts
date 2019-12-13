import { Component, ViewEncapsulation } from "@angular/core";
import { LangService }                  from "../../services/lang.service";
import { Router }                       from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

    constructor(
        private langService: LangService,
        private router: Router
    ) {}

    changeLang( lang ) {
        if ( this.langService.lang !== lang ) {
            let pathname = window.location.pathname;

            if ( this.langService.lang == '' ) {
                pathname = '/' + lang + ( ( pathname[0] === '/' ) ? pathname : '/' + pathname );

            } else {
                let pathnameObj = ( pathname[0] === '/' ) ? pathname.substr( 1 ).split( '/' ) : pathname.split( '/' );
                pathnameObj[0] = lang;
                pathname = '/' + pathnameObj.join( '/' )

            }
            this.router.navigate( [ pathname ] );

        }

    }

}
