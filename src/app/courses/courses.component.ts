import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent  {

  title = 'CVS Bootcamp';
  // coursesList = true;
  header = 'Courses Options';

  developmentPlan = [
    {
      status: 'Not Started',
      courseName: 'Angular',
      link: '/angular'
    },
    {
      status: 'Not Started',
      courseName: 'Java',
      link: '/java',
    },
    {
      status: 'Not Started',
      courseName: 'HTML',
      link: '/html',
    },
    {
      status: 'Not Started',
      courseName: 'CSS',
      link: '/css',
    },
    {
      status: 'Not Started',
      courseName: 'JavaScript',
      link: '/javascript',
    },
  ];

  // onCourses() {
  //   this.coursesList = true;
  //   this.header = 'Subject List';
  //   this.title = 'my courses';
  // }

  goBack() {
    // this.coursesList = false;
    this.header = 'Choose Option';
  }
  goHome() {
    // this.coursesList = false;
    this.header = 'Choose Option2222';
  }
}
