import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { SearchService } from './search.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    apiObservable;
    searchSubject = new Subject();

    constructor(
        private http: Http,
        private searchService: SearchService
    ) { }

    findCharacter(name){
        this.searchSubject.next(name);
    }

    ngOnInit() {
        this.apiObservable = this.searchSubject
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(name => this.searchService.createAPIObservable(name));
    }

}
