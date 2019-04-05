import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {

  }

  goToRegister(){

      this.navCtrl.push('RegisterPage');//for leazy loadng(3)=>string not object

}
goToLogin(){

  this.navCtrl.push('my-login-page');//for leazy loadng(3)=>string not object

}
getGitHubUsers(){
  this.navCtrl.push('GitHubUsersPage');//for leazy loadng(3)=>string not object
  
}

}
