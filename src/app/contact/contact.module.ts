import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    RouterModule.forChild([
      {path:'',component : ContactUsComponent}
    ])
  ]
})
export class ContactModule { }