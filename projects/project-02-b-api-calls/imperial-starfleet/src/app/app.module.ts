import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { InfoWindowComponent } from './info-window/info-window.component';

@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent,
    InfoWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InternalDefensesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
