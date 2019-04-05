import { Component } from "@angular/core";
import {SalaryRangePipePipe} from "./salary-range-pipe.pipe"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers:[SalaryRangePipePipe]
})
export class AppComponent {
  title = "Angular DEmo";
  colS = 2;
  today= new Date();
  Students = [
    {
      name: "Ali",
      dept: "PD",
      salary: 100.51,
      eval: 1
    },
    {
      name: "Nour",
      dept: "SA",
      salary: 200,
      eval: 2
    },
    {
      name: "Mona",
      dept: "MD",
      salary: 300,
      eval: 3
    },
    {
      name: "Sara",
      dept: "SAP",
      salary: 100,
      eval: 4
    },
    {
      name: "Mostafa",
      dept: "EB",
      salary: 200,
      eval: 5
    },
    {
      name: "Ahmed",
      dept: "GD",
      salary: 300,
      eval: 1
    },
    {
      name: "Noha",
      dept: "GA",
      salary: 100,
      eval: 2
    }
  ];
  name="ABC";
f=-1;
  isDisplayed = true;
  makeChange(data,idx){
    this.Students[idx].name=data;
    this.f=-1;

  }
  updateStudent(idx) {
    //this.Students[idx].name = "updated data";
    this.isDisplayed = false;
  }
  deleteStudent(idx) {
    this.Students.splice(idx, 1);
  }
constructor(private salaryRangePipe:SalaryRangePipePipe){}

  filterStd(){
    this.Students=this.salaryRangePipe.transform(this.Students,100,300)


  }

}
