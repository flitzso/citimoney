import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErroCapivaraComponent } from './erro-capivara/erro-capivara.component';

const APP_ROUTES: Routes = [
    { path: 'erro', component: ErroCapivaraComponent },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
