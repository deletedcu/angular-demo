import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';
  private selectedItem: any;
  constructor(private http: Http) { }

  get(): Observable<Response> {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  onItemsRetrieved(callback: any): void {
  	this.get().subscribe(callback);
  }

  getSelectedItem(): any {
  	return this.selectedItem;
  }

  setSelectedItem(item: any): void {
  	this.selectedItem = item;
    console.log(this.selectedItem);
  }

  put(body: any): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const updateUrl = `${this.apiUrl}/${this.selectedItem.id}`;
    return this.http.put(updateUrl, JSON.stringify(this.selectedItem), { headers })
    .map((res:Response) => res.json());
  }

  dispenseItem(callback: any): void {
    this.selectedItem.remaining -= 1;
    this.put(this.selectedItem).subscribe(callback);
  }

  hasSufficientBalance(currentBalance: number): boolean {
    if(!this.selectedItem) return false;
    const hasSufficientBalance = (currentBalance >= this.selectedItem.cost);
    return hasSufficientBalance;
  }

  hasRemaining(): boolean {
    return this.selectedItem && this.selectedItem.remaining > 0;
  }
}
