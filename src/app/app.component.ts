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
  courses = ['Course 001', 'Course 002', 'Course 003', 'Course 004', 'Course 005'];
  list = [{courseId: 'CC001', courseName: 'Angular'}, {courseId: 'CC002', courseName: 'Java'}];


  oncourses() {
    this.coursesList = true;
    this.header = 'Course List';
    this.title = 'my courses';
  }

}
