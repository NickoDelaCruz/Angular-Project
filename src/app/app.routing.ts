import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent }   from './movie/movie.component';
import { MarketplaceComponent }   from './marketplace/marketplace.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'movie',
    component: MovieComponent
  },
  // {
  //   path: 'marketplace',
  //   component: MarketplaceComponent
  // }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
