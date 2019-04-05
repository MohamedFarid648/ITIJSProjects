import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GithubUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubUsersProvider {

  constructor(public http: HTTP) {
    console.log('Hello GithubUsersProvider Provider');
  }

  getAllUsers(){
    let x;
    //PC>Settings>Network>Wifi>NetworkName(ex:ITI_Student)=>IP4Address
    //https://api.github.com/users?since=2018
        this.http.get("https://api.github.com/users",{},{}).then(data => {//http://10.145.2.75:7000/ListProducts
            x=data.data;
      
        })
        .catch(error => {
      
        return error;
        });
    
        
    return x;
    
    }
}
