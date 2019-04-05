import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { Observable } from  'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //persons: Observable<any[]>;
  persons;
  itemsRef: AngularFireList<any>;
  
  constructor(public navCtrl: NavController, public db:AngularFireDatabase) {
    // this.itemsRef = db.list('people');
	  // this.persons = this.itemsRef.snapshotChanges().map(actions => {
		//   return actions.map(action => ({ key: action.key, ...action.payload.val()}));
    // });
}

  ionViewDidLoad() {
    const personRef = this.db.database.ref(`/people/`);
    personRef.on('value', personSnapshot => {
      this.persons=personSnapshot.val();
      console.log( personSnapshot.val());
    });
  }

}
