import { Component, OnInit } from '@angular/core';
import{UsersService} from '../users.service';
import{User} from '../user';
import{Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {

IsLoaded=false;
public gitHubUsers:Array<User>=[]

  constructor(private userServiceObj:Http) { }

  ngOnInit() {

this.userServiceObj.get("https://api.github.com/users").
      map(
         (response) => response.json()

      ).
      subscribe(
         (data) => {
           
           this.displaydata(data);
          
        
      
              }
      )
   }
  
  
   displaydata2(data2,index) {this.gitHubUsers[index].followers_Array = data2;}
   displaydata3(data3,index) {this.gitHubUsers[index].following_Array = data3;}
  
   displaydata(data) {this.gitHubUsers = data;
   
                  
               /* for(let i=0;i<this.gitHubUsers.length;i++ ){

                      this.userServiceObj.get(this.gitHubUsers[i].followers_url).
                            map(
                              (response) => response.json()

                            ).
                            subscribe(
                              (data2) => {
                                
                                this.displaydata2(data2,i);
                                
                              
                            
                                    }
                            )


                }


                for(let i=0;i<this.gitHubUsers.length;i++ ){

                      


                this.userServiceObj.get(this.gitHubUsers[i].following_url).
                      map(
                        (response) => response.json()

                      ).
                      subscribe(
                        (data) => {
                          
                          this.displaydata3(data,i);
                          
                        
                      
                              }
                      )



                }*/
}

}
