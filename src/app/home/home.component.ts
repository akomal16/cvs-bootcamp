import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // title = 'CVS Bootcamp!';
  title = 'CVS Bootcamp';
  coursesList = false;
  header = 'Choose Option';
  courseId = 54;
  isClicked: boolean = false;


  // treePlan in an array that containes a 3 string values.
  treePlan = ['status', 'courseName', 'tree'];

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

  oncourses() {
    this.coursesList = true;
    this.header = 'Subject List';
    this.title = 'my courses';
  }

  goBack() {
    this.coursesList = false;
    this.header = 'Choose Option';
  }
}


