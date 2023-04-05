import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {MainViewComponent} from "./main-view/main-view.component";
import { GetCardComponent } from './get-card/get-card.component';
import { ServiceComponent } from './service/service.component';
import { StatsComponent } from './stats/stats.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    GetCardComponent,
    ServiceComponent,
    StatsComponent,
    ApplicationFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
