import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CVS Bootcamp!';
  coursesList = false;
  header = 'Choose Option';
  developmentPlan = [
    {
     status: 'Not Started',
     courseName: 'Angular'
    },
    {
      status: 'Not Started',
      courseName: 'Core Java'
    },
    {
      status: 'Not Started',
      courseName: 'HTML'
    },
    {
      status: 'Not Started',
      courseName: 'CSS'
    },
    {
      status: 'Not Started',
      courseName: 'JavaScrript'
    },

    ];


  oncourses() {
    this.coursesList = true;
    this.header = 'Course List';
    this.title = 'my courses';
  }

}
