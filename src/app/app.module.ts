import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RmHandlerComponent } from './rm-handler/rm-handler.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RmHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
