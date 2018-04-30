import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';
import { ArticlePage } from '../article/article';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  feed: any;

  constructor(public navCtrl: NavController, private feedProvider: FeedProvider, private socialSharing: SocialSharing) {
  }

  ionViewWillEnter(){
  	this.feedProvider.getFeed('articles/all').subscribe(feed => {
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
    this.feedProvider.getFeed('articles/all').subscribe(feed => {
      this.feed = feed;
      refresher.complete();
    });
  }

  socialShare(message, url){
    this.socialSharing.share(message, null, null, url)
  }

}
