import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../services/course-service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit, OnDestroy {

  constructor(private courseService: CourseService) {
  }

  title =  'Java Topics';
  coursesList = false;
  header = 'Choose Option';
  // javaPlan = [
  //   this.courseService.getJavaData()
  // ];

  javaPlan = [];

  ngOnInit() {

    // this.courseService.alertMe();
    console.log('This is on component initialization');
    // This is calling getJavaData() from the CourseService
    this.javaPlan = this.courseService.getJavaData();
    // this.courseService.getJavaData();
    // alert('Hello from component');
    console.log(this.javaPlan, 'This is our javaPlan data');
  }

  ngOnDestroy() {
    console.log('This is on component removal');
  }

  // TODO move the above data into a service

  // javaPlan = [
  //   {
  //     javaSkill: 'Java Syntax',
  //     status: 'Done',
  //   },
  //   {
  //     javaSkill: 'OOP',
  //     status: 'In Progress',
  //   },
  //   {
  //     javaSkill: 'Exception Handling',
  //     status: 'Not Started',
  //   },
  //   {
  //     javaSkill: 'Multi Threading',
  //     status: 'In Progress',
  //   },
  //   {
  //     javaSkill: 'Collections',
  //     status: 'In Progress',
  //   },
  //   {
  //     javaSkill: 'Java IO',
  //     status: 'Not Started',
  //   },
  // ];

  goBack() {
    this.coursesList = true;
    this.header = 'Choose Option';
  }
  goHome() {
    this.coursesList = false;
    this.header = 'Choose Option1111';
  }
}
