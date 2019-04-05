import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryRangePipe'
})
export class SalaryRangePipePipe implements PipeTransform {

  transform(value: any, min?: number, max?:number): any {
let resultarr=[];

for(let i =0; i<value.length;i++){
if(value[i].salary>min &&value[i].salary<max)
resultarr.push(value[i]);


}


    return resultarr;
  }

}
