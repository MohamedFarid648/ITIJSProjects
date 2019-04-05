
import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';

import { FruitsComponent } from './fruits/fruits.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { AddProductComponent } from './add-product/add-product.component';
import{MyMaterialModule} from './my-material/my-material.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    NavBarComponentComponent,
    FruitsComponent,
    ClientsComponent,
    ClientInfoComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,MyMaterialModule ,ReactiveFormsModule,
    RouterModule.forRoot([
    {path:'',component:FruitsComponent},
    {path:'ClientInfo',component:ClientInfoComponent},
    {path:'Fruits',component:FruitsComponent},
    {path:'Clients',component:ClientsComponent},
    {path:'AddProduct',component:AddProductComponent}
    
    // {path:'**',component:AppComponent}
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
