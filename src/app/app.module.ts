import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NewsPage } from '../pages/news/news';
import { EventsPage } from '../pages/events/events';
import { SettingsPage } from '../pages/settings/settings';
import { ArticlePage } from '../pages/article/article';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FCM } from '@ionic-native/fcm';
import { FeedProvider } from '../providers/feed/feed';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    EventsPage,
    SettingsPage,
    ArticlePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    EventsPage,
    SettingsPage,
    ArticlePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedProvider
  ]
})
export class AppModule {}
