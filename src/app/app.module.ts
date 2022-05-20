import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './composants/produits/produits.component';
import { HomeComponent } from './composants/home/home.component';
import { AjouterunproduitComponent } from './composants/ajouterunproduit/ajouterunproduit.component';

import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    HomeComponent,
    AjouterunproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
