import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-dispense-item',
  templateUrl: './dispense-item.component.html',
  styleUrls: ['./dispense-item.component.css'],
  providers: []
})
export class DispenseItemComponent implements OnInit {
  constructor(private itemService: ItemService, private balanceService: BalanceService) { }

  ngOnInit() { }

  dispenseItem() {
    const currentBalance = this.balanceService.getBalance();
    if(!this.itemIsSelected()) return;
    if(!this.hasSufficientBalance(currentBalance)) return;
    if(!this.hasRemaining()) return;
    this.itemService.dispenseItem((item) => {
    alert('Enjoy your ' + item.name);
    this.balanceService.deductBalance(item.cost);
    });
  }

  itemIsSelected() {
    const itemIsSelected = !!this.itemService.getSelectedItem();
    if(!itemIsSelected) alert('No item selected');
    return itemIsSelected;

  }

  hasSufficientBalance(currentBalance) {
    const hasBalance = this.itemService.hasSufficientBalance(currentBalance);
    if(!hasBalance) alert('Insufficient balance');
    return hasBalance;
  }

  hasRemaining() {
    const remaining = this.itemService.hasRemaining();
    if(!remaining) alert('No remaining inventory for this item');
    return remaining;
  }
}
