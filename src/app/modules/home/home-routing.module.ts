import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';



const routes: Routes = [
  {
    path:'tracks',
    loadChildren:()=>import('@modules/tracks/tracks.module').then(p=>p.TracksModule)
  },
  {
    path:'favorites',
    loadChildren:()=>import('@modules/favorites/favorites.module').then(p=>p.FavoritesModule)
  },
  {
    path:'history',
    loadChildren:()=>import('@modules/history/history.module').then(p=>p.HistoryModule)
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
