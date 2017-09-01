import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactRouting } from "./contact-routing";
import { ContactService } from "./share/contact.service";

@NgModule({
  imports: [
    CommonModule,
    ContactRouting,
    FormsModule,
    HttpModule
  ],

  declarations: [
    ContactFormComponent,
    ContactListComponent,
    ContactDetailComponent
  ],

  providers:[
    {provide:'contactSrv', useClass: ContactService}
  ]
})
export class ContactModule { }
