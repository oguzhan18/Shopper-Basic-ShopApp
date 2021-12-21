import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { MallsComponent } from './components/malls/malls.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BuyComponent } from './components/store/buy/buy.component';
import { CartComponent } from './components/store/cart/cart.component';
import { ProductContainerComponent } from './components/store/product-container/product-container.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  { path: 'productontainer'  ,component : ProductContainerComponent },
  { path: 'cart'             ,component : CartComponent             },
  { path: 'login'            ,component : LoginComponent            },
  { path: 'buy'              ,component : BuyComponent              },
  { path: 'malls'            ,component : MallsComponent            },
  { path: 'wallet'           ,component : WalletComponent           },
  { path: 'contact'          ,component : ContactComponent          },
  { path: 'profile'          ,component : ProfileComponent          },
  { path: ''                 ,component : ProductContainerComponent },
  { path: '**'               ,component : ErrorComponent            }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
