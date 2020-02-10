import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private fb: FormBuilder, private backRouter: Router, private homeRouter: Router,
              private angularRouter: Router,  private javaRouter: Router,
              private htmlRouter: Router, private cssRouter: Router,
              private javaScriptRouter: Router) {
  }
  // constructor(private coursesRouter: Router, ) {
  //
  // }

  title = 'CVS Bootcamp';
  header = 'Courses Options';
  courseForm: FormGroup;


  // amar = [
  //   'gdfgfd', 'gdfgdf', 'ggggg'
  // ]
  //
  //
  // warwick = [
  //   {
  //   test: 'gfdgd',
  //   test2: 545
  // },
  //   {
  //     test: 'gfdgd',
  //     test2: 545
  //   },
  //   {
  //     test: 'gfdgd',
  //     test2: 545
  //   },
  //
  // ]



  angularPlan = [
    {
      status: 'In Progress',
      courseName: 'Angular',
      link: '/angular',
      phases: ['Not Started', 'In Progress', 'Completed']
    }
  ];


  javaPlan = [
    {
      status: 'In Progress',
      courseName: 'Java',
      link: '/java',
      phases: ['Not Started', 'In Progress', 'Completed']
    }
  ];

    htmlPlan = [
      {
        status: 'Completed',
        courseName: 'HTML',
        link: '/html',
        phases: ['Not Started', 'In Progress', 'Completed']
      }
    ];

    cssPlan = [
      {
        status: 'Completed',
        courseName: ['CSS Not Started', 'CSS In Progress', 'CSS Completed'],
        Link: '/css',
        phases: [' Not Started', 'In Progress', 'Completed']
      }
    ];
    javaScriptPlan = [
      {
        status: 'Not Started',
        courseName: 'JavaScript',
        link: '/javascript',
        phases: ['Not Started', 'In Progress', 'Completed']
      }
    ];

// TODO this is basic ngOnInit life cycle method

//   ngOnInit() {
// this.courseForm = new FormGroup({
// })
//   }

  ngOnInit() {
    this.courseForm = this.fb.group({
      angularControl: new FormControl(),
      javaControl: new FormControl(),
      htmlControl: new FormControl(),
      cssControl: new FormControl(),
      javaScriptControl: new FormControl()
    });

    const angularValue = this.angularPlan[0].status;
    // const amar = 'test';


    this.courseForm.get('angularControl').setValue(angularValue);
    console.log(this.angularPlan[0].status, 'Angular logs');
    console.log(this.courseForm);

    const angularphase = this.angularPlan[0].phases[1];
    this.courseForm.get('angularControl').setValue(angularphase);
    // this.courseForm.get('angularControl').setValue(amar);
    console.log(this.angularPlan[0].phases[1], ' log angular phase In Progress');
    console.log(this.angularPlan[0].phases[2], ' log angular phase completed log');

    const javaValue = this.javaPlan[0].status;
    this.courseForm.get('javaControl').setValue(javaValue);

    const htmlValue = this.htmlPlan[0].status;
    this.courseForm.get('htmlControl').setValue(htmlValue);
    console.log(this.htmlPlan, 'html console log');
    console.log(this.htmlPlan[0], 'htmlplan Array log');

    const cssValue = this.cssPlan[0].courseName[2];
    this.courseForm.get('cssControl').setValue(cssValue);

    const javaScriptValue = this.javaScriptPlan[0].phases[0];
    this.courseForm.get('javaScriptControl').setValue(javaScriptValue);

  }

  goBack() {
    this.header = 'Choose Option';
    // this.coursesRouter.navigate(['/home']);
    this.backRouter.navigate(['/home']);

  }
  goHome() {
    this.homeRouter.navigate(['/home']);
  }

  goAngular() {
    this.angularRouter.navigate(['/angular']);
    // console.log(amar);
  }

  goJava() {
  this.javaRouter.navigate(['/java']);
  }

  goHtml() {
    this.htmlRouter.navigate(['/html']);
  }

  goCss() {
    this.cssRouter.navigate(['/css']);
  }
  goJavaScript() {
    this.javaScriptRouter.navigate(['/javascript']);
  }

}
