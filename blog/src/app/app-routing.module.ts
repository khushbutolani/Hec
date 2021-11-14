import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdHocreportComponent } from './ad-hocreport/ad-hocreport.component';
import { AdhocDataComponent } from './adhoc-data/adhoc-data.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactComponent } from './contact/contact.component';
import { CustomizeReportComponent } from './customize-report/customize-report.component';
import { CustomizedataComponent } from './customizedata/customizedata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscrepancydataComponent } from './discrepancydata/discrepancydata.component';
import { DispensaryreportComponent } from './dispensaryreport/dispensaryreport.component';
import { DropoutdataComponent } from './dropoutdata/dropoutdata.component';
import { DropoutinterruptionreportComponent } from './dropoutinterruptionreport/dropoutinterruptionreport.component';
import { ExaminationReportComponent } from './examination-report/examination-report.component';
import { ExaminationdataComponent } from './examinationdata/examinationdata.component';
import { FaqComponent } from './faq/faq.component';
import { FeedataComponent } from './feedata/feedata.component';
import { FeereleasereportComponent } from './feereleasereport/feereleasereport.component';
import { ForcastdataComponent } from './forcastdata/forcastdata.component';
import { ForecastreportComponent } from './forecastreport/forecastreport.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FunddataComponent } from './funddata/funddata.component';
import { FundtoPeiReportComponent } from './fundto-pei-report/fundto-pei-report.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { GovtFundsReportComponent } from './govt-funds-report/govt-funds-report.component';
import { GovtdataComponent } from './govtdata/govtdata.component';
import { HelpFacilityComponent } from './help-facility/help-facility.component';
import { HistoryReportComponent } from './history-report/history-report.component';
import { HistorydataComponent } from './historydata/historydata.component';

import { HomeComponent } from './home/home.component';
import { InputClaimComponent } from './input-claim/input-claim.component';

import { LoginComponent } from './login/login.component';
import { NewPeiHomeComponent } from './new-pei-home/new-pei-home.component';
import { ProgramdataComponent } from './programdata/programdata.component';
import { ProgrammeDetailReportComponent } from './programme-detail-report/programme-detail-report.component';
import { ProgrammeRepeatComponent } from './programme-repeat/programme-repeat.component';
import { RepeatdataComponent } from './repeatdata/repeatdata.component';
import { ReportComponent } from './report/report.component';
import { ReportingExceptionComponent } from './reporting-exception/reporting-exception.component';

import { SingleViewClaimScndComponent } from './single-view-claim-scnd/single-view-claim-scnd.component';
import { SingleViewClaimfstComponent } from './single-view-claimfst/single-view-claimfst.component';
import { SingleViewClaimscndComponent } from './single-view-claimscnd/single-view-claimscnd.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentdetailfstComponent } from './studentdetailfst/studentdetailfst.component';
import { UploadclaimComponent } from './uploadclaim/uploadclaim.component';
import { ViewClaimPeiComponent } from './view-claim-pei/view-claim-pei.component';


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
  {path:'inputclaim',component:InputClaimComponent},
  {path:'newpeihome',component:NewPeiHomeComponent},
  {path:'uploadclaim',component:UploadclaimComponent},
  {path:'help',component:HelpFacilityComponent},
  {path:'report',component:ReportComponent},
  {path:'Dispensaryreport',component:DispensaryreportComponent},
  {path:'forecastreport',component:ForecastreportComponent},
  {path:'adhocreport',component:AdHocreportComponent},
  {path:'feereleasereport',component:FeereleasereportComponent},
  {path:'dropout',component:DropoutinterruptionreportComponent},
  {path:'viewclaimpei',component:ViewClaimPeiComponent},
  {path:'singleviewfst',component:SingleViewClaimfstComponent},
  {path:'singleviewscnd',component:SingleViewClaimscndComponent},
  {path:'studentdetailfst',component:StudentdetailfstComponent},
  {path:'programreport',component:ProgrammeDetailReportComponent},
  {path:'historyreport',component:HistoryReportComponent},
  {path:'examinationreport',component:ExaminationReportComponent},
  {path:'govt',component:GovtFundsReportComponent},
  {path:'repeat',component:ProgrammeRepeatComponent},
  {path:'fund',component:FundtoPeiReportComponent},
  {path:'customize',component:CustomizeReportComponent},
  {path:'reportingexception',component:ReportingExceptionComponent},
  {path:'discrepancydata',component:DiscrepancydataComponent},
  {path:'forcastdata',component:ForcastdataComponent},
  {path:'adhocdata',component:AdhocDataComponent},
  {path:'dropoutdata',component:DropoutdataComponent},
  {path:'programdata',component:ProgramdataComponent},
  {path:'historydata',component:HistorydataComponent},
  {path:'examdata',component:ExaminationdataComponent},
  {path:'govtdata',component:GovtdataComponent},
  {path:'repeatdata',component:RepeatdataComponent},
  {path:'funddata',component:FunddataComponent},
  {path:'customizedata',component:CustomizedataComponent},
  {path:'feedata',component:FeedataComponent},
  {path:'dashboard',component:DashboardComponent},
 
 

 
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
