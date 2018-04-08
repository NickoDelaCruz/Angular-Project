import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Hollywood (Movies)
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MovieComponent }   from './components/movie/movie.component';
import { ContactComponent }   from './components/contact/contact.component';

// Game Crazy (Games)
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

//Admin
import { AdminComponent } from './components/admin/admin.component';

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
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'games/:id',
    component: GameDetailComponent
  }

  // {
  //   path: '',
  //   component: Component
  // }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
