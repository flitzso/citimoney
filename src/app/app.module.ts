import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroCapivaraComponent } from './erro-capivara/erro-capivara.component';

// Importe o módulo do carrossel aqui
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    ErroCapivaraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(), // Importe o módulo do carrossel aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



