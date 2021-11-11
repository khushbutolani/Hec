import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactComponent } from './contact/contact.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { SingleViewClaimScndComponent } from './single-view-claim-scnd/single-view-claim-scnd.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InputClaimComponent } from './input-claim/input-claim.component';
import { NewPeiHomeComponent } from './new-pei-home/new-pei-home.component';
import { UploadclaimComponent } from './uploadclaim/uploadclaim.component';
import { HelpFacilityComponent } from './help-facility/help-facility.component';





@NgModule({
  declarations: [
    AppComponent,
   
    MaterialComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ContactComponent,
    GlossaryComponent,
    StudentDetailComponent,
    SingleViewClaimScndComponent,
    NavbarComponent,
    FaqComponent,
    AboutusComponent,
    InputClaimComponent,
    NewPeiHomeComponent,
    UploadclaimComponent,
    HelpFacilityComponent,
   
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
