import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { MiddleBarComponent } from './components/middle-bar/middle-bar.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';

import { MiddleContainerComponent } from './components/middle-bar/middle-container/middle-container.component';
import { ProductInfoComponent } from './components/middle-bar/product-info/product-info.component';
import { RatingBarComponent } from './components/middle-bar/rating-bar/rating-bar.component';
import { ProductPreviewComponent } from './components/middle-bar/product-preview/product-preview.component';
import { SearchCartComponent } from './components/right-bar/search-cart/search-cart.component';

import { ProductAddComponent } from './components/middle-bar/product-add/product-add.component';
import { ProductPriceComponent } from './components/right-bar/product-price/product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    MiddleBarComponent,
    RightBarComponent,
    SearchCartComponent,
    ProductPreviewComponent,
    MiddleContainerComponent,
    ProductInfoComponent,
    RatingBarComponent,
    ProductAddComponent,
    ProductPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
