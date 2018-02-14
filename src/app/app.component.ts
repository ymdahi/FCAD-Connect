import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from "@ionic-native/fcm";
import { AlertController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM, private alertCtrl: AlertController) {
    platform.ready().then(() => {
     
      statusBar.styleDefault();
      splashScreen.hide();

      //Only bring in Firebase Cloud Messaging if we're running on a native device with cordova (avoid cordova unavailable runtime errors)
      if(platform.is("cordova")) {

        this.fcm.onNotification().subscribe(data=>{  //Subscribe this device to notifications
          if(data.wasTapped) {
            this.presentAlert();  //If we tapped on a notification (ie. from the lockscreen?) do this alert
          } else {
            this.presentAlert();  //If we didn't (ie. we were already in the app?) do this alert
          };
        });

      }

    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Test Alert',
      subTitle: 'Received notification',
      buttons: ['Ok']
    });
    alert.present();
  }

}