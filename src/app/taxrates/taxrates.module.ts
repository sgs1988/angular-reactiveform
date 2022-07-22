import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaxratesComponent } from './taxrates.component';
import { TaxchatComponent } from './taxchat/taxchat.component';
import { TaxratesRoutingModule } from './taxrates-routing.module';



@NgModule({
  declarations: [
    TaxratesComponent,
    TaxchatComponent
  ],
  imports: [
    CommonModule,
    TaxratesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaxratesModule { }
