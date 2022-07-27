import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { TaxratesService } from './taxrates.service';

@Component({
  selector: 'app-taxrates',
  templateUrl: './taxrates.component.html',
  styleUrls: ['./taxrates.component.scss']
})
export class TaxratesComponent implements OnInit {
  taxForm: FormGroup;
  private _fb: any;
  FormControl: any;

  currentTaxRate: number = 12;
  dividentTaxRate: number = 30;
  constructor(public fb: FormBuilder, private taxratesService: TaxratesService) {
    this.taxForm = this.fb.group({
      currentTaxRate: ['', Validators.required],
      dividentTaxRate: ['', Validators.required],
      gainTaxRate: ['', Validators.required],
      annualRate: ['', Validators.required],
      dividenedYield: ['', Validators.required],
      cashYield: ['', Validators.required],
      iraBalance: ['', Validators.required],
      iraContribution: ['', Validators.required],
      iraBasis: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    let data = {
      currentTaxRate: 30,
      dividentTaxRate: 70,
      gainTaxRate: 30,
      annualRate: 20,
      dividenedYield: 5,
      cashYield: 6,
      iraBalance: 600000,
      iraContribution: 6000,
      iraBasis: 60
    }

    this.taxForm.patchValue({
      currentTaxRate: data.currentTaxRate,
      dividentTaxRate: data.dividentTaxRate,
      gainTaxRate: data.gainTaxRate,
      annualRate: data.annualRate,
      dividenedYield: data.dividenedYield,
      cashYield: data.cashYield,
      iraBalance: data.iraBalance,
      iraContribution: data.iraContribution,
      iraBasis: data.iraBasis
    })
  }
  get taxFormControl() {
    return this.taxForm.controls;
  }

  mapSliderValue(value: number) {
    return value.toString();
  }

  reassignPercentage(){}

  modelChangeFn(event: any, name: string) {
    let taxData = {
      currentTaxRate: this.taxForm.controls['currentTaxRate'].value,
      dividentTaxRate: this.taxForm.controls['dividentTaxRate'].value,
      gainTaxRate: this.taxForm.controls['gainTaxRate'].value,
      annualRate: this.taxForm.controls['annualRate'].value,
      dividenedYield: this.taxForm.controls['dividenedYield'].value,
      cashYield: this.taxForm.controls['cashYield'].value,
      iraBalance: this.taxForm.controls['iraBalance'].value,
      iraContribution: this.taxForm.controls['iraContribution'].value,
      iraBasis: this.taxForm.controls['iraBasis'].value
    };
    this.taxratesService.getUsersForSubscription(taxData).subscribe((response: any) => {
      console.log(response, '....response')
    })
  }

}
