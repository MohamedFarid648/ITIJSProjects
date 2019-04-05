import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
IsAdded=false;
Employees:Array<Employee>=[];

SubmitForm(EmpData){
this.IsAdded=true;
this.Employees.push(new Employee(EmpData.ID,EmpData.Name,EmpData.Age,EmpData.DepID));
console.log("Name:"+EmpData.Name);

}
}
