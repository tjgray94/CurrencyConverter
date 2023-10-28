import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BothComponent } from './both/both.component';
import { UsdValueComponent } from './usd-value/usd-value.component';
import { YenValueComponent } from './yen-value/yen-value.component';

const routes: Routes = [
  { path: 'USDtoYen', component: UsdValueComponent },
  { path: 'YenToUSD', component: YenValueComponent },
  { path: 'Both', component: BothComponent },
  { path: 'Home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
