import { Injectable }             from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, map }        from "rxjs/operators";
import { of }                     from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RestApiServices {

    constructor(
        private httpClient: HttpClient,
    ) {}

    httpParams;

    getRows( url, params? ) {
        this.httpParams = new HttpParams();

        for ( let key in params ) {
            if ( params.hasOwnProperty( key ) ) {
                this.httpParams = this.httpParams.set( key, params[key] );

            }

        }

        return this.httpClient.get(
            url,
            {
                params: this.httpParams,
                observe: 'response',
                reportProgress: false,
                responseType: 'json',
                withCredentials: false
            }
        ).pipe(
            map( data => {
                return data.body;

            }),
            catchError( data => {
                return of({
                    message: data.message,
                    name: data.name,
                    ok: data.ok,
                    status: data.status,
                    statusText: data.statusText,
                    url: data.url
                });

            })

        );

    }

    getRow( url ) {
        this.httpParams = new HttpParams();

        return this.httpClient.get(
            url,
            {
                params: this.httpParams,
                observe: 'response',
                reportProgress: false,
                responseType: 'json',
                withCredentials: false
            }
        ).pipe(
            map( data => {
                return data.body;

            }),
            catchError( data => {
                return of({
                    message: data.message,
                    name: data.name,
                    ok: data.ok,
                    status: data.status,
                    statusText: data.statusText,
                    url: data.url
                });

            })
        );

    }

    setRow( url, values ) {
        this.httpParams = new HttpParams();

        return this.httpClient.post(
            url,
            values,
            {
                params: this.httpParams,
                observe: 'response',
                reportProgress: false,
                responseType: 'json',
                withCredentials: false
            }
        ).pipe(
            map( ( data ) => {
                return data.body;

            }),
            catchError( ( data ) => {
                return of({
                    message: data.message,
                    name: data.name,
                    ok: data.ok,
                    status: data.status,
                    statusText: data.statusText,
                    url: data.url
                });

            })

        );

    }

    updateRow( url, values ) {
        this.httpParams = new HttpParams();

        return this.httpClient.put(
            url,
            values,
            {
                params: this.httpParams,
                observe: 'response',
                reportProgress: false,
                responseType: 'json',
                withCredentials: false
            }
        ).pipe(
            map( ( data ) => {
                return data.body;

            }),
            catchError( ( data ) => {
                return of({
                    message: data.message,
                    name: data.name,
                    ok: data.ok,
                    status: data.status,
                    statusText: data.statusText,
                    url: data.url
                });

            })

        );

    }

    deleteRow( url, values ) {
        this.httpParams = new HttpParams();

        return this.httpClient.delete(
            url,
            values
        ).pipe(
            map( ( data ) => {
                return data;

            }),
            catchError( ( data ) => {
                return of({
                    message: data.message,
                    name: data.name,
                    ok: data.ok,
                    status: data.status,
                    statusText: data.statusText,
                    url: data.url
                });

            })

        );

    }

}
