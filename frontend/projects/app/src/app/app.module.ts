import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputModule } from '@common-ctrls/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
