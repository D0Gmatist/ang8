import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class FunctionsServices {

    dataTypeOf ( n: any ) {
        let l = typeof n;

        if ('object' === l) {
            if (!n){
                return 'null';
            }
            if (n instanceof Array){
                return 'array';
            }
            if (n instanceof Date) {
                return 'date';
            }
            if (n instanceof Object){
                return l;
            }
            let e = Object.prototype.toString.call(n);
            if ('[object Window]' === e){
                return 'object';
            }
            if ('[object Array]' === e || 'number' == typeof n.length && void 0 !== n.splice && void 0 !== n.propertyIsEnumerable && !n.propertyIsEnumerable('splice')){
                return 'array';

            }
            if ('[object Function]' === e || void 0 !== n.call && void 0 !== n.propertyIsEnumerable && !n.propertyIsEnumerable('call')){
                return 'function';
            }
        } else if ('function' === l && void 0 === n.call){
            return 'object';
        }
        return l

    }

    inArray ( n: any[], l ) {
        for ( let e = 0; e < n.length; e++ ) {
            if ( n[e] + '' === l + '' ) {
                return !0;

            }

        }
        return !1;

    }

    getKeysObject( obj ) {
        let keys = [];
        if ( this.dataTypeOf( obj ) == 'object' ) {
            keys = Object.keys( obj );

        }
        return keys;

    }

    dataClone( data: any ) {
        let newData: any;

        switch ( this.dataTypeOf( data ) ) {

            case 'object':
                newData = {};
                for ( let key in data ) {
                    if ( data.hasOwnProperty( key ) ) {
                        newData[key] = this.dataClone( data[key] );
                    }
                }
                break;

            case 'date':
                newData = new Date();
                newData.setTime( data.getTime() );
                break;

            case 'array':
                newData = [];
                for ( let key in data ) {
                    if ( data.hasOwnProperty( key ) ) {
                        newData.push( data[key] );
                    }
                }
                break;

            case 'number':
                newData = data - 0;
                break;

            case 'string':
                newData = data + '';
                break;

            case 'null':
                newData = null;
                break;

            case 'boolean':
                newData = !!( data );
                break;

            default:
                newData = data;

        }
        return newData;

    }

}
