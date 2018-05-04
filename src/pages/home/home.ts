import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from "../about/about";
//import { Brightness } from '@ionic-native/brightness';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   openAboutPage(){
     //opens About page
    this.navCtrl.push(AboutPage);
  }
 

}
