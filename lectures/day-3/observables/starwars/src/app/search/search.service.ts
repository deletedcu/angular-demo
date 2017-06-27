import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    constructor(private http: Http) {}

    createAPIObservable(name){
        return this.http.get('http://swapi.co/api/people/?search=' + name)
            .map(response=> response.json().results );
    }
}
