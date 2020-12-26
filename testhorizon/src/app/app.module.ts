import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmptableComponent } from './components/emptable/emptable.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the order pipe
import { Ng2SearchPipeModule } from 'ng2-search-filter';// importing the search pipe
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmptableComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,//pour le filtre
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
