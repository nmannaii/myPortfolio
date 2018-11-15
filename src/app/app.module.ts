import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyLayoutModule } from './components/layout-components/layout-module/my.layout.module';
import { ResumeDataService } from './components/resume/resume.data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyLayoutModule,
    HttpClientModule
  ],
  providers: [
    ResumeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
