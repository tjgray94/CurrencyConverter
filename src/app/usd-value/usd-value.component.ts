import { Component, Input, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'usd-value',
  templateUrl: './usd-value.component.html',
  styleUrls: ['./usd-value.component.css']
})
export class UsdValueComponent implements OnInit {

  UsdValue: number;
  newYenValue: number;

  constructor(private converterService: ConverterService) {}

  ngOnInit(): void {
  }

  USDtoYen(): number {
    this.newYenValue = this.UsdValue * 134.09;
    return this.newYenValue;
  }
}
