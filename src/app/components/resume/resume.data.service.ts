import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillInterface } from './skillInterface';
@Injectable()

export class ResumeDataService {
  private workingExperience;
  private educationExperience;

  constructor(private http: HttpClient) {
  }
  public getWorkEdu() {
    return this.http.get('./assets/work.json');
  }
  public getSkills() {
    return this.http.get<SkillInterface>('./assets/skills.json');
  }
}
