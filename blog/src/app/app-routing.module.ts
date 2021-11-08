import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GlossaryComponent } from './glossary/glossary.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { SingleViewClaimScndComponent } from './single-view-claim-scnd/single-view-claim-scnd.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [

  
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'contact',component:ContactComponent},
  {path:'glossary',component:GlossaryComponent},
  {path:'studentdetail',component:StudentDetailComponent},
  {path:'singleviewclaim',component:SingleViewClaimScndComponent},
  {path:'faq',component:FaqComponent},
  {path:'aboutus',component:AboutusComponent},
 
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
