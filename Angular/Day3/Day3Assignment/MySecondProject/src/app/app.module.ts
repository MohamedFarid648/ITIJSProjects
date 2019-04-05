import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';

import{UsersService} from './users.service';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ComplainmentComponent } from './complainment/complainment.component';
import { UserServiceComponent } from './user-service/user-service.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    NavBarComponentComponent,
    AboutComponent,
    GallaryComponent,
    ComplainmentComponent,
    UserServiceComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
    {path:'',component:AboutComponent},
    {path:'complainment',component:ComplainmentComponent},
    {path:'gallary',component:GallaryComponent},
    {path:'about',component:AboutComponent}, 
    {path:'gitHubUsers',component:UserServiceComponent}
    // {path:'**',component:AppComponent}
    
    ])
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
