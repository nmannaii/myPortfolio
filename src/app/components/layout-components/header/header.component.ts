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
  constructor() { }

  ngOnInit() {
  }
  showAboutComponent() {
    this.showHome = this.showResume = false;
    this.showAbout = true;
  }
  showHomeComponent() {
    this.showAbout = this.showResume = false;
    this.showHome = true;
  }
  showResumeComponent() {
    this.showHome = this.showAbout = false;
    this.showResume = true;
  }
}
