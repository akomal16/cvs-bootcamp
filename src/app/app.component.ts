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
  oncourses() {
    this.coursesList = true;
    this.header = 'Course List';
  }

}
