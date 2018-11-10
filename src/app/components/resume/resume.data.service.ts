import { Injectable } from '@angular/core';

@Injectable()

export class ResumeDataService {
  private workingExperience = [
    {
      title: 'Summer Internship',
      location: 'Horizon-Data',
      starts: '06/2018',
      ends: '08/2018',
      task: 'Developing a MEAN stack web application for the research unit \'ATSSEE\''
    },
    {
      title: 'Summer Internship',
      location: 'GetWireless',
      starts: '07/2017',
      ends: '08/2017',
      task: 'Developing a java desktop application retrieving and filtering data from database'
    }
  ];
  public get work() {
    return this.workingExperience;
  }
}
