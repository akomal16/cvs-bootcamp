import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  title = 'CVS Bootcamp';
  header = 'Courses Options';
  courseForm: FormGroup;

  angularPlan = [
    {
      status: 'Completed',
      courseName: 'Angular',
      link: '/angular',
      phases: ['Not Started', 'In Progress', 'Completed']
    }
  ];



  // angularPlan = [
  //   {
  //     status: 'Not Started',
  //     courseName: 'Java',
  //     link: '/java',
  //   },
  //   {
  //     status: 'Not Started',
  //     courseName: 'HTML',
  //     link: '/html',
  //   },
  //   {
  //     status: 'Not Started',
  //     courseName: 'CSS',
  //     link: '/css',
  //   },
  //   {
  //     status: 'Not Started',
  //     courseName: 'JavaScript',
  //     link: '/javascript',
  //   },
  // ];


//   ngOnInit() {
// this.courseForm = new FormGroup({
// })
//   }
  ngOnInit() {
    this.courseForm = this.fb.group({
      angularControl: new FormControl()
    });
    const angularValue = this.angularPlan[0].status;
    this.courseForm.get('angularControl').setValue(angularValue);
    console.log(this.angularPlan[0].status);
    console.log(this.courseForm);
  }

  goBack() {
    // this.coursesList = false;
    this.header = 'Choose Option';
  }
  goHome() {
    // this.coursesList = false;
    this.header = 'Choose Option2222';
  }
}
