import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.css']
})
export class BothComponent implements OnInit {

  UsdValue: number;
  newYenValue: number;
  YenValue: number;
  newUsdValue: number;

  constructor() { }

  ngOnInit(): void {
  }

  USDtoYen(): number {
    this.newYenValue = this.UsdValue * 134.09;
    return this.newYenValue;
  }

  YenToUSD(): number {
    this.newUsdValue = this.YenValue / 134.09;
    return this.newUsdValue;
  }

}
