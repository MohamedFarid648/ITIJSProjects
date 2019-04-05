import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireList, AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'welcome-page'
})
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
UserItem:any;
UsersList;UsersListArray=[];UserListKeys;
/*


  UserFullName:this.FullName,
    UserGender:this.Gender,
    UserBirthOfDate:this.BirthOfDate,
    UserFaculty:this.Faculty
*/
  constructor(public navCtrl: NavController, public navParams: NavParams,public MyDB:AngularFireDatabase) {

    this.UserItem=this.navParams.get("User");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    //debugger;
    this.UsersList=this.MyDB.database.ref('/Users/');
    console.log("this.UsersList:"+this.UsersList);
    
    for(let i in this.UsersList){
      this.UsersListArray[i]=this.UsersList[i];
    //console.log( this.UsersListArray[i]);
      
      }

    this.UserListKeys=Object.keys(this.UsersList);
//console.log(this.UsersList.path.pieces);
/*
repo
path
queryParams_
orderByCalled_
*/
    /*for(let i=0;i<this.UserListKeys.length;i++){
      /*
      repo
      path
      queryParams_
      orderByCalled_
      *//*
            console.log(this.UserListKeys[i]);
   }*/
    /* 
    returned:
    https://myfirstionicproject-54d21.firebaseio.com/Users.json
    JSON Input
{ Json Object not Array
      "-LB1eo8WCfODoJee3_cZ": {
      "Faculty": "Commerece",
      "FullName": "Hussien",
      "Gender": "Male"
      }
}
    
    */
  }


}
