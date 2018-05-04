import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SurveyTwoPage } from "../survey-two/survey-two";
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-survey-one',
  templateUrl: 'survey-one.html',
})
export class SurveyOnePage {

 constructor(private storage1:Storage,  public navCtrl: NavController, public navParams:NavParams) {

  }

myStatus1:string ;
  openSurveyTwoPage(){
     console.log(this.myStatus1);
    this.storage1.set("ResultTwo",this.myStatus1);
    this.navCtrl.push(SurveyTwoPage);
  }

  ionViewWillEnter()
  {
    this.storage1.get("ResultTwo")
    .then((data)=>{
      this.myStatus1=data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
 

}
