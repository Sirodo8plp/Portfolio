import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-page-theme-toggler',
  templateUrl: './page-theme-toggler.component.html',
  styleUrls: ['./page-theme-toggler.component.scss'],
})
export class PageThemeTogglerComponent implements OnInit, OnChanges {
  @Input() isMenuOpen?: boolean;
  theme?: string;

  constructor() {}

  GetColorFromMedia = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  GetColorFromStorage = () => {
    return localStorage.getItem('theme');
  };

  SetDarkMode = () => {
    localStorage.setItem('theme', 'dark');
    document.body.className = 'dark';
    this.theme = 'dark';
  };

  setLightMode = () => {
    localStorage.setItem('theme', 'light');
    document.body.className = 'light';
    this.theme = 'light';
  };

  DefineColor(): void {
    let color = this.GetColorFromStorage() || this.GetColorFromMedia();
    document.body.className = color;
    this.theme = color;
  }

  ngOnInit(): void {
    this.DefineColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.DefineColor();
  }
}
