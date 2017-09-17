import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

    baseUrl: string = '/api/';

    constructor(private http: Http) {

    }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error instanceof Response) {
        let errorMessage = '';
        try {
          errorMessage = error.json().error;
        } catch(err) {
          errorMessage = error.statusText;
        }
        return Observable.throw(errorMessage);
      }
      return Observable.throw(error || 'Node.js server error');
    }

}