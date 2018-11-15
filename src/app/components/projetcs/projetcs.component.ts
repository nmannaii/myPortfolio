import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';
import { flipAnimation } from 'src/app/animations';

@Component({
  selector: 'app-projetcs',
  templateUrl: './projetcs.component.html',
  styleUrls: ['./projetcs.component.scss'],
  animations: [
    flipAnimation
  ]
})
export class ProjetcsComponent implements OnInit, OnChanges {
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
