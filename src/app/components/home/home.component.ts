import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { flipAnimation } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    flipAnimation
  ]
})
export class HomeComponent implements OnInit, OnChanges {
  public showState = 'show';
  @Input() show: boolean;

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    const show: SimpleChange = changes.show;
    this.showState = show.currentValue ? 'flip-in' : 'flip-out';
  }

}
