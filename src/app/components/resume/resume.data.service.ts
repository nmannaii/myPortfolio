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
  private educationExperience = [
    {
      title: 'Computer Science Engineering Diploma',
      // location: 'National High School of Engineers of Tunis',
      location: 'E.N.S.I.T',
      starts: '2016',
      ends: 'present'
    },
    {
      title: 'Scientific Preparatory Cycle',
      // location: 'Preparatory School Of Engineering Studies Nabeul',
      location: 'I.P.E.I.N',
      starts: '2014',
      ends: '2016'
    },
    {
      title: 'Mathematics Bachelor',
      location: 'Raoued High School',
      starts: '2010',
      ends: '2014'
    }
  ];
  public get work() {
    return this.workingExperience;
  }
  public get education() {
    return this.educationExperience;
  }
}
