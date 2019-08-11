import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { BeersComponent } from './beers/beers.component';
import { AddBeerComponent } from './add-beer/add-beer.component';



const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'beers', component: BeersComponent },
    { path: 'add-beer', component: AddBeerComponent }
    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);