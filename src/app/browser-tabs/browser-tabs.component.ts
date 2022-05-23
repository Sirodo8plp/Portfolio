import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser-tabs',
  templateUrl: './browser-tabs.component.html',
  styleUrls: ['./browser-tabs.component.scss'],
})
export class BrowserTabsComponent implements OnInit {
  @Input() tab?: string;
  constructor(private router: Router) {}

  RedirectToAbout(): void {
    this.router.navigate(['/browser/about']);
  }

  RedirectToProjects(): void {
    this.router.navigate(['/browser/projects']);
  }

  RedirectToContact(): void {
    this.router.navigate(['/browser/contact']);
  }

  ngOnInit(): void {}
}
