import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/store/product/product.component';
import { ProductContainerComponent } from './components/store/product-container/product-container.component';
import { CartComponent } from './components/store/cart/cart.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CartItemComponent } from './components/store/cart-item/cart-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { BuyComponent } from './components/store/buy/buy.component';
import { MallsComponent } from './components/malls/malls.component';
import { ErrorComponent } from './components/error/error.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductContainerComponent,
    CartComponent,
    NavbarComponent,
    CartItemComponent,
    LoginComponent,
    FooterComponent,
    SidbarComponent,
    BuyComponent,
    MallsComponent,
    ErrorComponent,
    WalletComponent,
    ContactComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
