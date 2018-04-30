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
  endUrl;

  constructor(public http: HttpClient) {
    this.baseUrl = "http://connect.fcad.ryerson.ca/json/";
    this.endUrl = "?_format=json";
  }

  getFeed(resourcePath) {
    this.url = this.baseUrl + resourcePath + this.endUrl;
  	return this.http.get(this.url);
  }

}
