import { Component, OnInit } from '@angular/core';
import { IProject, Projects } from './projects';

@Component({
  selector: 'app-browser-projects',
  templateUrl: './browser-projects.component.html',
  styleUrls: ['./browser-projects.component.scss'],
})
export class BrowserProjectsComponent implements OnInit {
  projects: Array<IProject> = Projects;
  constructor() {}

  ngOnInit(): void {}
}
