import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatListModule } from '@angular/material';

import { PresentationComponent } from '../../presentation/presentation.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { ResumeComponent } from '../../resume/resume.component';
import { ResumeDataService } from '../../resume/resume.data.service';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [
    HeaderComponent,
    PresentationComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent
  ],
  exports: [
    HeaderComponent,
    PresentationComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent
  ]
})
export class MyLayoutModule { }
