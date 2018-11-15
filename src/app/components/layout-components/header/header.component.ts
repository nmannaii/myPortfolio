import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showHome = true;
  public showAbout = false;
  public showResume = false;
  public showProjects = false;
  constructor() { }

  ngOnInit() {
  }
  showAboutComponent() {
    this.showHome = this.showResume = this.showProjects = false;
    this.showAbout = true;
  }
  showHomeComponent() {
    this.showAbout = this.showResume = this.showProjects  = false;
    this.showHome = true;
  }
  showResumeComponent() {
    this.showHome = this.showAbout = this.showProjects  = false;
    this.showResume = true;
  }
  showProjectsComponent() {
    this.showHome = this.showAbout = this.showResume  = false;
    this.showProjects = true;
  }
}
