import { Component, OnInit } from "@angular/core";
import { LangService }       from "../../services/lang.service";
import { LangStorage }       from "../../storage/lang.storage";
import { ApiUrlService }     from "../../services/api.url.service";
import { FunctionsServices } from "../../services/functions.service";
import { RestApiServices }   from "../../services/rest.api.service";

@Component({
    selector: 'app-main',
    templateUrl: './page.component.html',
    styleUrls: [ './page.component.css' ]
})
export class PageComponent implements OnInit {

    constructor (
        private langService: LangService,
        private langStorage: LangStorage,
        private apiUrlService: ApiUrlService,
        private functionsServices: FunctionsServices,
        private restApiServices: RestApiServices
    ) {}

    ngOnInit (): void {
        this.getData();

    }

    getLang() {
        return this.langService.lang;

    }

    getApiUrlPage() {
        return this.apiUrlService.apiUrlContent;

    }

    data: object = {};

    getData() {
        this.restApiServices.getRow( this.getApiUrlPage() ).subscribe( data => {
            this.data = data;

        });

    }

}
