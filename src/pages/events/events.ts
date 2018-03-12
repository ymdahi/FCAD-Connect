import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';
import { ArticlePage } from '../article/article';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  feed: any;

  constructor(public navCtrl: NavController, private feedProvider: FeedProvider) {
  }

  ionViewWillEnter(){
  	this.feedProvider.getFeed('events').subscribe(feed => {
  		this.feed = feed;
  	});
  }

  openArticle(itemNid, itemTitle){
    this.navCtrl.push(ArticlePage, {
      itemNid: itemNid,
      itemTitle: itemTitle
    });
  }

  doRefresh(refresher){
    this.feedProvider.getFeed('events').subscribe(feed => {
      this.feed = feed;
      refresher.complete();
    });
  }

}
