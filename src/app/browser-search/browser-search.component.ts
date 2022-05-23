import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-browser-search',
  templateUrl: './browser-search.component.html',
  styleUrls: ['./browser-search.component.scss'],
})
export class BrowserSearchComponent implements OnChanges {
  @Input()
  tab?: string;
  title?: string;

  constructor() {}

  ngOnChanges(): void {
    this.ChangeTitle();
  }

  ChangeTitle(): void {
    if (!this.tab) return;
    this.tab === 'projects'
      ? (this.title = 'https://theodorosGiannopoulos.portfolio.com/projects')
      : this.tab === 'about'
      ? (this.title = 'https://theodorosGiannopoulos.portfolio.com/about')
      : (this.title = 'https://theodorosGiannopoulos.portfolio.com/contact');
  }
}
