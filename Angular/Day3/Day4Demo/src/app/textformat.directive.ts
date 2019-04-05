import { Directive, HostListener, ElementRef, Input, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTextformat]'
})
export class TextformatDirective {
@Input("appTextformat") txtcase;
//beta7;od property met3arafa 3ala el tag eli haneshta3'al 3alih
@HostBinding('class.text-white') changebgColor=true;


@HostListener('focus') onfocus(){

  this.changebgColor=!this.changebgColor;
  if(this.txtcase=="lower"){
  this.el.nativeElement.value =  this.el.nativeElement.value.toLowerCase();
  }else
  this.el.nativeElement.value =  this.el.nativeElement.value.toUpperCase();

  //this.renderer.setElementClass(this.el.nativeElement,"bg-danger",true)
}




@HostListener ('blur') onblur(){
this.changebgColor=!this.changebgColor;
this.renderer.setElementClass(this.el.nativeElement,"bg-success",true)



}

  constructor(private el:ElementRef, private renderer:Renderer) { }


}
