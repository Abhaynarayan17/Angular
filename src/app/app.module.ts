// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactUsComponent } from './contact/contact-us/contact-us.component';
// import { NavigationComponent } from './navigation/navigation.component';
// import { ServicesComponent } from './service/services/services.component';
// import { VehiclesComponent } from './vehicle/vehicles/vehicles.component';
// import { ServiceAppointmentFormComponent } from './service-appointment-form/service-appointment-form.component';
// import { VehicleCustomizationRequestFormComponent } from './vehicle-customization-form/vehicle-customization-form.component';
// import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
// import { FormsModule } from '@angular/forms';
// import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     AboutComponent,
//     NavigationComponent,
//     ServiceAppointmentFormComponent,
//     VehicleCustomizationRequestFormComponent,
//     SubscriptionFormComponent,
//     ShoppinglistComponent
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
    
// ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppinglist/shoppinglist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, ShoppingListComponent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}