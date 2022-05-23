import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
})
export class FileViewerComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor() {}

  HandleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {}
}
