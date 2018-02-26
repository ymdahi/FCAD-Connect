import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FeedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedProvider {

  baseUrl;
  url;

  constructor(public http: HttpClient) {
    this.baseUrl = "https://sitebuilder1.fcadweb.ca/";
  }

  getFeed(resourcePath) {
    this.url = this.baseUrl + resourcePath;
  	return this.http.get(this.url);
  }

}
