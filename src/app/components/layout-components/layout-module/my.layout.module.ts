import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatListModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PresentationComponent } from '../../presentation/presentation.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { ResumeComponent } from '../../resume/resume.component';
import { ResumeDataService } from '../../resume/resume.data.service';
import { ProjetcsComponent } from '../../projetcs/projetcs.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule
  ],
  declarations: [
    HeaderComponent,
    PresentationComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ProjetcsComponent
  ],
  exports: [
    HeaderComponent,
    PresentationComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ProjetcsComponent
  ]
})
export class MyLayoutModule { }
