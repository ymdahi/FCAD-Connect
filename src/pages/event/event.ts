import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';




@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  article: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private feedProvider: FeedProvider) {
  }

  ionViewWillEnter(){
  	this.title = this.navParams.get('itemTitle');
  	this.feedProvider.getFeed('events/' + this.navParams.get('itemNid')).subscribe(feed => {
  		this.article = feed[0];
  	});
  }

}
