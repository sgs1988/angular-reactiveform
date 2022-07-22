import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearbookingComponent } from './clearbooking/clearbooking.component';
import { ClientsComponent } from './clients/clients.component';
import { CrmComponent } from './crm/crm.component';
import { DriverComponent } from './driver/driver.component';
import { FinanceComponent } from './finance/finance.component';
import { NewbookingsComponent } from './newbookings/newbookings.component';
import { SummaryComponent } from './summary/summary.component';
import { TflComponent } from './tfl/tfl.component';
import { PagedetailsComponent } from './pagedetails/pagedetails.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'summary' },
  { path: 'summary', component: SummaryComponent },
  { path:'clearbooking', component:ClearbookingComponent },
  { path:'clients', component:ClientsComponent },
  { path:'drivers', component:DriverComponent },
  { path:'crm', component:CrmComponent },
  { path:'finance', component:FinanceComponent },
  { path:'tfl', component:TflComponent },
  { path:'newbookings', component:NewbookingsComponent },
  { path:'pagedetails', component:PagedetailsComponent },
  {
    path: 'taxrates',
    loadChildren: () => import('src/app/taxrates/taxrates.module').then(m => m.TaxratesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: false,
    scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
