import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  
  weather; 
  searchSubject = new Subject(); 

  constructor(
    private http: Http,
    private searchService: SearchService
  ) { } 

  findWeather(zip){
    this.searchSubject.next(zip);
  }

  ngOnInit() {
    this.searchSubject
    .debounceTime(1000)
    .distinctUntilChanged()
    .subscribe(zip => {
        this.searchService.createAPIObservable(zip)
            .subscribe(response => this.weather = response.json());
    })
  }
  
}