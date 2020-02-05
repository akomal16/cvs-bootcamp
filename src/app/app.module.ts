import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { JavaComponent } from './java/java.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { LoginComponent } from './login/login.component';
import { AwardComponent } from './award/award.component';
import {CourseService} from "./services/course-service";
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularComponent,
    JavaComponent,
    JavascriptComponent,
    HtmlComponent,
    CssComponent,
    LoginComponent,
    AwardComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
