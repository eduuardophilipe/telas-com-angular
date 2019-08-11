
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BeersComponent } from './beers/beers.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { routing } from './app-routing';
import { AuthService } from './home/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeersComponent,
    AddBeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
