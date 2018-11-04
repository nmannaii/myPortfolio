import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { flipAnimation } from '../../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    flipAnimation
  ]
})
export class AboutComponent implements OnInit, OnChanges {
  @Input() show: boolean;
  public showState = 'show';
  public display = 'none';
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const show: SimpleChange = changes.show;
    this.showState = show.currentValue ? 'flip-in' : 'flip-out';
    this.display = show.currentValue ? 'block' : 'none';
  }
}
