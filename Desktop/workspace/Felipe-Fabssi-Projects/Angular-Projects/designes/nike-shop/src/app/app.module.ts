import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { MiddleBarComponent } from './components/middle-bar/middle-bar.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { SearchBuyComponent } from './components/right-bar/search-buy/search-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    MiddleBarComponent,
    RightBarComponent,
    SearchBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
