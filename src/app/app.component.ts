import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen'

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDwAc1wBXyl9rR48EOcSjm2ijp_9YRLvio',
  databaseURL: 'https://desafio-gs3-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'desafio-chat';
  constructor() {
    firebase.initializeApp(config);
  }

  // initializeApp(config) {
  //   /* To make sure we provide the fastest app loading experience
  //      for our users, hide the splash screen automatically
  //      when the app is ready to be used:

  //       https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
  //   */
  //   SplashScreen.hide();
  // }
}