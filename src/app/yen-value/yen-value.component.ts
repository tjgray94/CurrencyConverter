import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yen-value',
  templateUrl: './yen-value.component.html',
  styleUrls: ['./yen-value.component.css']
})
export class YenValueComponent implements OnInit {

  YenValue: number;
  newUsdValue: number;

  constructor() { }

  ngOnInit(): void {
  }

  YenToUSD(): number {
    this.newUsdValue = this.YenValue / 134.09;
    return this.newUsdValue;
  }
}
