import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InsertCoinComponent } from './insert-coin/insert-coin.component';

import { BalanceService } from './balance/balance.service';
import { ItemService } from './item/item.service';
import { DispenseItemComponent } from './dispense-item/dispense-item.component';
import { SelectItemComponent } from './select-item/select-item.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertCoinComponent,
    DispenseItemComponent,
    SelectItemComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BalanceService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
