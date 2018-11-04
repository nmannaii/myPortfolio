import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showHome = true;
  public showAbout = false;
  constructor() { }

  ngOnInit() {
  }
  showAboutComponent() {
    this.showHome = false;
    this.showAbout = true;
  }
  showHomeComponent() {
    this.showHome = true;
    this.showAbout = false;
  }
}
