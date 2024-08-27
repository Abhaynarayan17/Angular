import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },

  { path: 'vehicles', loadChildren: () => import('./vehicle//vehicle.module').then(m => m.VehicleModule) },
{ path: 'services', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

