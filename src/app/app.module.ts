import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyLayoutModule } from './components/layout-components/layout-module/my.layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
