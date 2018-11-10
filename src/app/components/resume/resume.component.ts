import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { flipAnimation } from '../../animations';
import { ResumeDataService } from './resume.data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    flipAnimation
  ]
})
export class ResumeComponent implements OnInit, OnChanges {

  @Input() show: boolean;
  public showState = 'show';
  public display = 'none';
  public resumeWork = (new ResumeDataService()).work;
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const show: SimpleChange = changes.show;
    this.showState = show.currentValue ? 'flip-in' : 'flip-out';
    this.display = show.currentValue ? 'block' : 'none';
  }

}
