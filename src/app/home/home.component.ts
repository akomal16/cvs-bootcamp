import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private coursesRouter: Router, ) {

  }

  title = 'CVS Bootcamp';
  coursesList = false;
  header = 'Choose Option';

  // treePlan in an array that contains a 3 string values.
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

  onCourses() {
    this.coursesRouter.navigate(['/courses']);
    // this.coursesList = true;
    // this.header = 'Subject List';
    // this.title = 'my courses';
    // [routerLink]="'/courses'"
  }
  ngOnInit() {}
  // goBack() {
  //   this.coursesList = false;
  //   this.header = 'Choose Option';
  // }
  // goHome() {
  //   this.coursesList = false;
  //   this.header = 'Choose Option1111';
  // }

}


