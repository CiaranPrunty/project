import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SurveyOnePage } from "../survey-one/survey-one";
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private storage:Storage,  public navCtrl: NavController, public navParams:NavParams) {

  }

myStatus:string ;

   openSurveyOnePage(){
    console.log(this.myStatus);
    this.storage.set("ResultOne",this.myStatus);
    
    this.navCtrl.push(SurveyOnePage);

  }

}
