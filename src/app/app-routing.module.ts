import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => 
    import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about', loadChildren: () => 
    import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'supercars', loadChildren: () => 
    import('./pages/supercars/supercars.module').then(m => m.SupercarsModule)
  },
  {
    path: 'manufacturers', loadChildren: () => 
    import('./pages/manufacturers/manufacturers.module').then(m => m.ManufacturersModule)
  },
  {
    path:"", redirectTo: "home", pathMatch: "full"
  }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
