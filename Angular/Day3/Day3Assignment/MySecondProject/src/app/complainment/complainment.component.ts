import { Component, OnInit } from '@angular/core';
import {Complainment} from '../complainment'

@Component({
  selector: 'app-complainment',
  templateUrl: './complainment.component.html',
  styleUrls: ['./complainment.component.css']
})
export class ComplainmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
ComObject:Complainment=new Complainment("","",0,"");
}
