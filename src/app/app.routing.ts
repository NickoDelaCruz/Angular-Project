import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent }   from './cart/cart.component';
import { MarketplaceComponent }   from './marketplace/marketplace.component';

const appRoutes: Routes = [
  {
     path: '',
     component: AppComponent
   },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
