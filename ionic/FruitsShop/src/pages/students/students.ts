import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{StudentDetailsPage} from '../student-details/student-details';
/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
Students:Array<{Id:number,Name:string,Phone:string}>;
//items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Students=[{Id:1,Name:"Ali",Phone:"01112858168"},{Id:2,Name:"Mohamed",Phone:"01112858168"},{Id:3,Name:"Ahmed",Phone:"01112858168"},{Id:4,Name:"Mostafa",Phone:"01112858168"},{Id:5,Name:"Ayman",Phone:"01112858168"}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }

  itemTapped(event,stu){

    this.navCtrl.push(StudentDetailsPage,{
      StudentITem:stu
    })
  }

}
