import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WelcomeComponent } from './components/welcome/welcome.component';
import { MovieComponent }   from './components/movie/movie.component';
import { ContactComponent }   from './components/contact/contact.component';
import { CartComponent }   from './components/cart/cart.component';


const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'movie',
    component: MovieComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
