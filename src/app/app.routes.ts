import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VehiclesComponent } from './vehicle/vehicles/vehicles.component';
import { ContactUsComponent } from './contactus/contact-us/contact-us.component';
import { ServicesComponent } from './service/services/services.component';

export const  routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'vehicles', loadChildren: () => import('./vehicle//vehicle.module').then(m => m.VehicleModule) },
  { path: 'services', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
  { path: 'contact', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) },
    //{ path: 'vehicles', component: VehiclesComponent },
    //{ path: 'contact-us', component: ContactUsComponent },
    //{ path: 'services', component: ServicesComponent}
    
  ];
