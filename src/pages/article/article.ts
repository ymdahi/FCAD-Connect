import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';
import { SocialSharing } from '@ionic-native/social-sharing';




@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  article: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private feedProvider: FeedProvider, private socialSharing: SocialSharing) {
  }

  ionViewWillEnter(){
  	this.title = this.navParams.get('itemTitle');
  	this.feedProvider.getFeed('articles/' + this.navParams.get('itemNid')).subscribe(feed => {
  		this.article = feed[0];
  	});
  }

  socialShare(message, url){
    this.socialSharing.share(message, null, null, url)
  }

}
