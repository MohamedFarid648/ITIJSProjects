import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpcustomService {

  constructor(private http:Http) {


  }

getAjaxReq(){
//http://services.groupkt.com/country/get/all

return this.http.get("https://api.github.com/users");


}


}
