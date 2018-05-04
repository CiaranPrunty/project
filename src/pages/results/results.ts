import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {AboutPage} from "../about/about";
import { SurveyOnePage } from "../survey-one/survey-one";
import { SurveyTwoPage } from "../survey-two/survey-two";
import { SurveyThreePage } from "../survey-three/survey-three";
import { SurveyFourPage } from "../survey-four/survey-four";

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage,private storage1:Storage,private storage2:Storage,private storage3:Storage,private storage4:Storage) {
  }

  ResultOne :String;
  ResultTwo : String;
  ResultThree : String;
  ResultFour : String;
  ResultFive : String;


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  ionViewWillEnter(){
    this.storage.get("ResultOne")
    .then((data) =>{
      this.ResultOne=data;
    })
    .catch((err)=>{
      console.log(err);
    })

       this.storage1.get("ResultTwo")
    .then((data) =>{
      this.ResultTwo=data;
    })
    .catch((err)=>{
      console.log(err);
    })
    
    this.storage2.get("ResultThree")
    .then((data) =>{
     this.ResultThree=data;
    })
    .catch((err)=>{
      console.log(err);
    })

        this.storage3.get("ResultFour")
    .then((data) =>{
      this.ResultFour=data;
    })
    .catch((err)=>{
      console.log(err);
    })



  }


}
