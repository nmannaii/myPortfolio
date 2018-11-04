import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { PresentationComponent } from '../../presentation/presentation.component';
import { HomeComponent } from '../../home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AboutComponent } from '../../about/about.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    HeaderComponent,
    PresentationComponent,
    HomeComponent,
    AboutComponent
  ],
  exports: [
    HeaderComponent,
    PresentationComponent,
    HomeComponent,
    AboutComponent
  ]
})
export class MyLayoutModule { }
