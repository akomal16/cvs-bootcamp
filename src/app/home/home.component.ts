import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'CVS Bootcamp!';
  coursesList = false;
  header = 'Choose Option';
  developmentPlan = [
    {
      status: ['Not Started', 'In Progress', 'Done'],
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


