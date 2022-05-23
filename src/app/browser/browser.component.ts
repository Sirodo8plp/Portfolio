import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit {
  browserTab?: string;
  title?: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.browserTab = this.route.snapshot.paramMap.get('tab') || '';
    this.route.params.subscribe((params) => {
      this.browserTab = params['tab'];
      this.ChangeTitle();
    });
  }

  ChangeTitle(): void {
    if (!this.browserTab) return;
    this.browserTab === 'projects'
      ? (this.title = 'T/G Projects - Mozilla Firefox')
      : this.browserTab === 'about'
      ? (this.title = 'T/G About - Mozilla Firefox')
      : (this.title = 'T/G Contact Me - Mozilla Firefox');
  }
}
