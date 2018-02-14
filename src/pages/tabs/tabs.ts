import { Component } from '@angular/core';

import { NewsPage } from '../news/news';
import { EventsPage } from '../events/events';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = EventsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
