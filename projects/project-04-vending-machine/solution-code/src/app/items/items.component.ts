import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.onItemsRetrieved((items) => this.items = items);
  }

}
