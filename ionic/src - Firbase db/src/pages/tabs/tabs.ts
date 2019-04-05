import { Component } from '@angular/core';
import { FunctionalityPage } from '../Functionality/functionality';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FunctionalityPage;

  constructor() {

  }
}
