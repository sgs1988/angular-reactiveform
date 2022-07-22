import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxchat',
  templateUrl: './taxchat.component.html',
  styleUrls: ['./taxchat.component.scss']
})
export class TaxchatComponent implements OnInit {
  @Input() taxDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
