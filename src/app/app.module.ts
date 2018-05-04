import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {SurveyOnePage} from '../pages/survey-one/survey-one';
import {SurveyTwoPage} from '../pages/survey-two/survey-two';
import {SurveyThreePage} from '../pages/survey-three/survey-three';
import {SurveyFourPage} from '../pages/survey-four/survey-four';
import {ResultsPage} from "../pages/results/results";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
   SurveyOnePage,
   SurveyTwoPage,
   SurveyThreePage,
   SurveyFourPage,
   ResultsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  SurveyOnePage,
  SurveyTwoPage,
  SurveyThreePage,
  SurveyFourPage,
  ResultsPage
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}