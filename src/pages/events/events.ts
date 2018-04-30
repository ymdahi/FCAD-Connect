import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';
import { EventPage } from '../event/event';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  feed: any;

  constructor(public navCtrl: NavController, private feedProvider: FeedProvider) {
  }

  ionViewWillEnter(){
  	this.feedProvider.getFeed('events/all').subscribe(feed => {
  		this.feed = feed;
  	});
  }

  openEvent(itemNid, itemTitle){
    this.navCtrl.push(EventPage, {
      itemNid: itemNid,
      itemTitle: itemTitle
    });
  }

  doRefresh(refresher){
    this.feedProvider.getFeed('events/all').subscribe(feed => {
      this.feed = feed;
      refresher.complete();
    });
  }

}
