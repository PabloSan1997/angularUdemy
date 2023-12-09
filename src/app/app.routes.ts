import { Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/page/home-page/home-page.component';



export const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
    loadChildren:()=>import ('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'auth',
    loadChildren:()=>import ('./modules/auth/auth.module').then(m=>m.AuthModule)
  }
];
