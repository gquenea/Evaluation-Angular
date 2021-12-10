import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UneStatComponent } from './une-stat/une-stat.component';
import { ListeStatComponent } from './liste-stat/liste-stat.component';
import { CreationStatComponent } from './creation-stat/creation-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    UneStatComponent,
    ListeStatComponent,
    CreationStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
