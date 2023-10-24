import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroCapivaraComponent } from './erro-capivara/erro-capivara.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ErroCapivaraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
