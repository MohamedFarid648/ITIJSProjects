import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Dep1Page} from '../dep1/dep1';
import {Dep2Page} from '../dep2/dep2';
import {Dep3Page} from '../dep3/dep3';


/**
 * Generated class for the DepartmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-departments',
  templateUrl: 'departments.html',
})
export class DepartmentsPage {
  
  public FirstDep=Dep1Page;
  public SecondDep=Dep2Page;
  public ThirdDep=Dep3Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartmentsPage');
  }

}
