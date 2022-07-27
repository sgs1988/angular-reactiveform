import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxratesService {
  constructor() { }

  getUsersForSubscription(taxData: taxDataType):Observable<taxDataType>
  {
    let data = new Observable<taxDataType>(observer => {
        observer.next(taxData);
    });
    return data;
  }
}

export interface taxDataType
{
  currentTaxRate: number;
  dividentTaxRate: number;
  gainTaxRate: number;
  annualRate: number;
  dividenedYield: number;
  cashYield: number;
  iraBalance: number;
  iraContribution: number;
  iraBasis: number;
}