import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customPipe"
})
export class CustomPipePipe implements PipeTransform {
  transform(value: any,limits?:number): any {

    if (!value) {
      return null;
    } else {

      let limit=(limits)?limits:50
      return value.substr(0, limit) + "...";
    }
  }
}



