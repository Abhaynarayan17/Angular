import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    RouterModule.forChild([
      {path:'',component : VehicleModule}
    ])
  ]
})
export class VehicleModule { }
