import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  @Input ('titleComp') title_Comp;
  @Output ("customEvent") custevent=new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}


  clickEvent(){

this.custevent.emit(true);

  }
}
