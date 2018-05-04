import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from "../results/results";
import {Storage} from '@ionic/storage';
/**
 * Generated class for the SurveyFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-survey-four',
  templateUrl: 'survey-four.html',
})
export class SurveyFourPage {

   constructor(private storage4:Storage,  public navCtrl: NavController, public navParams:NavParams) {

  }

myStatus4:string ;

    openResultsPage(){
       console.log(this.myStatus4);
    this.storage4.set("ResultFive",this.myStatus4);
    this.navCtrl.push(ResultsPage);
  }

   ionViewWillEnter()
  {
    this.storage4.get("ResultFive")
    .then((data)=>{
      this.myStatus4=data;
    })
    .catch((err)=>{
      console.log(err);
    })

  }


}
