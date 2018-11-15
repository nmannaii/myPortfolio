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
  public resumeWork;
  public resumeEducation;
  public webSkill;
  public programmingSkill;
  public mobileSkill;
  public databaseSkill;
  constructor(private resumeData: ResumeDataService) {
  }

  ngOnInit() {
    this.resumeData.getWorkEdu().subscribe(data => {
      this.resumeWork = data[0];
      this.resumeEducation = data[1];
    });
    this.resumeData.getSkills().subscribe(data => {
      this.webSkill = data.web;
      this.programmingSkill = data.programming;
      this.mobileSkill = data.mobile;
      this.databaseSkill = data.database;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const show: SimpleChange = changes.show;
    this.showState = show.currentValue ? 'flip-in' : 'flip-out';
    this.display = show.currentValue ? 'block' : 'none';
  }

}
