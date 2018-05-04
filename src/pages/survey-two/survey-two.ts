import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SurveyThreePage } from "../survey-three/survey-three";
import {Storage} from '@ionic/storage';
/**
 * Generated class for the SurveyTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-survey-two',
  templateUrl: 'survey-two.html',
})
export class SurveyTwoPage {


   constructor(private storage2:Storage,  public navCtrl: NavController, public navParams:NavParams) {

  }

myStatus2:string ;

  openSurveyThreePage(){
     console.log(this.myStatus2);
    this.storage2.set("ResultThree",this.myStatus2);
    this.navCtrl.push(SurveyThreePage);
  }

   ionViewWillEnter()
  {
    this.storage2.get("ResultThree")
    .then((data)=>{
      this.myStatus2=data;
    })
    .catch((err)=>{
      console.log(err);
    })

  }
}
