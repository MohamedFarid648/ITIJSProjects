import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
 isAvailable:boolean=true;
 name="Mohamed";
 d=new Date();
  constructor() {
   }

  ngOnInit() {
  }
  onClick(){
    this.isAvailable=!this.isAvailable;

  }
}
