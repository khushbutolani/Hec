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
import { ReportComponent } from './report/report.component';
import { DispensaryreportComponent } from './dispensaryreport/dispensaryreport.component';
import { ForecastreportComponent } from './forecastreport/forecastreport.component';
import { AdHocreportComponent } from './ad-hocreport/ad-hocreport.component';
import { FeereleasereportComponent } from './feereleasereport/feereleasereport.component';
import { DropoutinterruptionreportComponent } from './dropoutinterruptionreport/dropoutinterruptionreport.component';
import { ViewClaimPeiComponent } from './view-claim-pei/view-claim-pei.component';
import { SingleViewClaimfstComponent } from './single-view-claimfst/single-view-claimfst.component';
import { SingleViewClaimscndComponent } from './single-view-claimscnd/single-view-claimscnd.component';
import { StudentdetailfstComponent } from './studentdetailfst/studentdetailfst.component';
import { ProgrammeDetailReportComponent } from './programme-detail-report/programme-detail-report.component';
import { HistoryReportComponent } from './history-report/history-report.component';
import { ExaminationReportComponent } from './examination-report/examination-report.component';
import { GovtFundsReportComponent } from './govt-funds-report/govt-funds-report.component';
import { ProgrammeRepeatComponent } from './programme-repeat/programme-repeat.component';
import { FundtoPeiReportComponent } from './fundto-pei-report/fundto-pei-report.component';
import { CustomizeReportComponent } from './customize-report/customize-report.component';
import { ReportingExceptionComponent } from './reporting-exception/reporting-exception.component';
import { DiscrepancydataComponent } from './discrepancydata/discrepancydata.component';
import { ForcastdataComponent } from './forcastdata/forcastdata.component';
import { AdhocDataComponent } from './adhoc-data/adhoc-data.component';
import { DropoutdataComponent } from './dropoutdata/dropoutdata.component';
import { ProgramdataComponent } from './programdata/programdata.component';
import { HistorydataComponent } from './historydata/historydata.component';
import { ExaminationdataComponent } from './examinationdata/examinationdata.component';
import { GovtdataComponent } from './govtdata/govtdata.component';

import { RepeatdataComponent } from './repeatdata/repeatdata.component';
import { FunddataComponent } from './funddata/funddata.component';
import { CustomizedataComponent } from './customizedata/customizedata.component';
import { FeedataComponent } from './feedata/feedata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { PEIComponent } from './pei/pei.component';





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
    ReportComponent,
    DispensaryreportComponent,
    ForecastreportComponent,
    AdHocreportComponent,
    FeereleasereportComponent,
    DropoutinterruptionreportComponent,
    ViewClaimPeiComponent,
    SingleViewClaimfstComponent,
    SingleViewClaimscndComponent,
    StudentdetailfstComponent,
    ProgrammeDetailReportComponent,
    HistoryReportComponent,
    ExaminationReportComponent,
    GovtFundsReportComponent,
    ProgrammeRepeatComponent,
    FundtoPeiReportComponent,
    CustomizeReportComponent,
    ReportingExceptionComponent,
    DiscrepancydataComponent,
    ForcastdataComponent,
    AdhocDataComponent,
    DropoutdataComponent,
    ProgramdataComponent,
    HistorydataComponent,
    ExaminationdataComponent,
    GovtdataComponent,
  
    RepeatdataComponent,
       FunddataComponent,
       CustomizedataComponent,
       FeedataComponent,
       DashboardComponent,
       Navbar2Component,
       PEIComponent,
   
  
 
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
