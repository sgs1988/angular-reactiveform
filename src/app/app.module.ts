import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClearbookingComponent } from './clearbooking/clearbooking.component';
import { ClientsComponent } from './clients/clients.component';
import { CrmComponent } from './crm/crm.component';
import { DriverComponent } from './driver/driver.component';
import { FinanceComponent } from './finance/finance.component';
import { HeaderComponent } from './header/header.component';
import { NewbookingsComponent } from './newbookings/newbookings.component';
import { PagedetailsComponent } from './pagedetails/pagedetails.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SummaryComponent } from './summary/summary.component';
import { TflComponent } from './tfl/tfl.component';

@NgModule({
  declarations: [
    AppComponent,
    ClearbookingComponent,
    ClientsComponent,
    CrmComponent,
    DriverComponent,
    FinanceComponent,
    HeaderComponent,
    NewbookingsComponent,
    PagedetailsComponent,
    SidebarComponent,
    SummaryComponent,
    TflComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
