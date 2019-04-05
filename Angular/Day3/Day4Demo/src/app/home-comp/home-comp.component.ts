import { Component, OnInit } from "@angular/core";
import { HttpcustomService } from './../httpcustom.service';

@Component({
  selector: "app-home-comp",
  templateUrl: "./home-comp.component.html",
  styleUrls: ["./home-comp.component.css"]
})
export class HomeCompComponent implements OnInit {
  caseprop = "lower";
  textData = "abc";
  diplayImg=false;
  imgsrc='';
  paragContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus iste sunt nostrum sequi exercitationem tempora vitae, distinctio rerum reiciendis eos enim a, aperiam saepe officiis, explicabo velit iure. Quis.";
  constructor(private httpService:HttpcustomService) {}

  ngOnInit() {}

  nermienFunu() {
    console.log("from component");
  }

  parentEventHandler() {
    console.log("event fired");
  }
  ajaxReq() {

    this.httpService.getAjaxReq().subscribe((data)=>{
      console.log(data.json()[0])
      this.diplayImg=true;
      this.imgsrc=data.json()[0].avatar_url;

    })
  }
}
