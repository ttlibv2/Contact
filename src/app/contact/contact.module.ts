import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactRouting } from "./contact-routing";
import { ContactService } from "./share/contact.service";
import { SheetV4Service } from "./share/index";
import { ContactSettingComponent } from './contact-setting/contact-setting.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],

  declarations: [
    ContactFormComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactSettingComponent
  ],

  providers:[
    {provide:'contactSrv', useClass: ContactService},
    {provide:'sheetV4', useClass: SheetV4Service}
  ]
})
export class ContactModule { }
