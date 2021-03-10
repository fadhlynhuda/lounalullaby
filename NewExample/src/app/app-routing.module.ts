import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  
  {
    path: 'latestnews',
    loadChildren: () => import('./latestnews/latestnews.module').then( m => m.LatestnewsPageModule)
  },
  
  {
    path: 'newlogin',
    loadChildren: () => import('./newlogin/newlogin.module').then( m => m.NewloginPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'haurabelle',
    loadChildren: () => import('./haurabelle/haurabelle.module').then( m => m.HaurabellePageModule)
  },
  {
    path: 'sabella',
    loadChildren: () => import('./sabella/sabella.module').then( m => m.SabellaPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
