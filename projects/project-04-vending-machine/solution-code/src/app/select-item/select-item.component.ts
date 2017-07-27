import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css'],
  providers: []
})
export class SelectItemComponent implements OnInit {
  items = [];
  itemCode = '';

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.onItemsRetrieved((items) => this.items = items);
  }

  onKeyup() {
    this.items.forEach((item) => {
      if (item.code === this.itemCode) {
        this.itemService.setSelectedItem(item);
        alert(`${item.name} has been selected.`)
      }
    });
  }
}
