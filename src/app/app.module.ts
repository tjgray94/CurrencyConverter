import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsdValueComponent } from './usd-value/usd-value.component';
import { YenValueComponent } from './yen-value/yen-value.component';
import { ConverterService } from './converter.service';
import { BothComponent } from './both/both.component';

@NgModule({
  declarations: [
    AppComponent,
    UsdValueComponent,
    YenValueComponent,
    BothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'USDtoYen', component: UsdValueComponent },
      { path: 'YenToUSD', component: YenValueComponent },
      { path: 'Both', component: BothComponent}
    ])
  ],
  providers: [ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
