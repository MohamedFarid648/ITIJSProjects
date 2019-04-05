import { Injectable } from '@angular/core';
import{Http} from '@angular/http';

@Injectable()
export class UsersService {


  constructor(private MyHttp:Http) { }

getData(){

  return this.MyHttp.get("https://api.github.com/users");
}

}
