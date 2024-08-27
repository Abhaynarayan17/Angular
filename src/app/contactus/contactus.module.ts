import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    RouterModule.forChild([
      {path:'',component : ContactusModule}
    ])
  ]
})
export class ContactusModule { }
