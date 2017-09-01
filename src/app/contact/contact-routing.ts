import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";

const contactRoutes: Routes = [
    {path: 'add', component: ContactFormComponent},
    {path: 'list', component: ContactListComponent},
    {path: 'detail/:id', component: ContactDetailComponent},
    {path: 'edit/:id', component: ContactDetailComponent},
    {path: '**', redirectTo: 'add'}
];

export const ContactRouting = RouterModule.forChild(contactRoutes);