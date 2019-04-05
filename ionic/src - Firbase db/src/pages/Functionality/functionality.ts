import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'page-functionality',
  templateUrl: 'functionality.html'
})
export class FunctionalityPage {
  itemsRef: AngularFireList<any>;
  Name:String;
  Age:number;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.itemsRef = db.list('people');
  }

  Add(){
    this.itemsRef.push({
        name:this.Name,
        age:this.Age
    });
  }
}
