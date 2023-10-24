import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe o componente "ErroCapivaraComponent" da localização correta
import { ErroCapivaraComponent } from './erro-capivara/erro-capivara.component';

const routes: Routes = [
  { path: 'erro-capivara', component: ErroCapivaraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
