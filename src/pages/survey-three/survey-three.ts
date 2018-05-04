import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SurveyFourPage } from "../survey-four/survey-four";
import {Storage} from '@ionic/storage';
/**
 * Generated class for the SurveyThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-survey-three',
  templateUrl: 'survey-three.html',
})
export class SurveyThreePage {

  constructor(private storage3:Storage,  public navCtrl: NavController, public navParams:NavParams) {

  }

myStatus3:string ;

   openSurveyFourPage(){
     console.log(this.myStatus3);
    this.storage3.set("ResultFour",this.myStatus3);
    this.navCtrl.push(SurveyFourPage);
  }

    ionViewWillEnter()
  {
    this.storage3.get("ResultFour")
    .then((data)=>{
      this.myStatus3=data;
    })
    .catch((err)=>{
      console.log(err);
    })

  }

}
