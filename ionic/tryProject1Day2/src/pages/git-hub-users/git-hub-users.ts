import { GithubUsersProvider } from './../../providers/github-users/github-users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GitHubUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-git-hub-users',
  templateUrl: 'git-hub-users.html',
})
export class GitHubUsersPage {
  MyData:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public MyUsersService:GithubUsersProvider) {
    this.MyData=this.MyUsersService.getAllUsers()
     
    console.log(this.MyData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GitHubUsersPage');
  }

}
