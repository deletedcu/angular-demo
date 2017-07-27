import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.css'],
  providers: []
})
export class InsertCoinComponent implements OnInit {
  coinBalance = 0;
  constructor(public balanceService: BalanceService) { }

  ngOnInit() {
    this.balanceService.onBalanceUpdated((balance) => {
      this.coinBalance = balance;
    });
  }

  addBalance(amount) {
    this.balanceService.addBalance(amount);
  }

}
