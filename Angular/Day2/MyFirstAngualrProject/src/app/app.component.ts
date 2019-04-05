import { Component } from '@angular/core';
import {Employee} from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
IsAdded=false;
Employees:Array<Employee>=[];

SubmitForm(EmpData){
this.IsAdded=true;
this.Employees.push(new Employee(EmpData.ID,EmpData.Name,EmpData.Age,EmpData.DepID));
console.log("Name:"+EmpData.Name);

}

}
