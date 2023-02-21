import { Injectable } from '@angular/core';
import { UsdValueComponent } from './usd-value/usd-value.component';

@Injectable()

export class ConverterService {
  UsdValue: number;
  YenValue: number;
  constructor(){}
  USDtoYen(){
    let Yen = this.UsdValue * 113.66;
    return Yen;
  }
  YenToUSD(){
    let USD = this.YenValue / 113.66;
    return USD;
  }
}
