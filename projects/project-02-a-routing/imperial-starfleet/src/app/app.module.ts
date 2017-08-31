import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module'

import { AppComponent } from './app.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';

@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InternalDefensesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
