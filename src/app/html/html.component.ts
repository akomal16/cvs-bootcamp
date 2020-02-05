import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../services/course-service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent {

  title = 'HTML Topics';
  htmlPlan = [
    {
      htmlCourse: 'HTML 5',
      status: 'Done',
    },
    {
      htmlCourse: 'HTML Elements',
      status: 'Done',
    },
    {
      htmlCourse: 'DOM',
      status: 'In Progress',
    },
    {
      htmlCourse: 'Creating Tables',
      status: 'Done'
    },
    //TODO NEED TO FIX htmlSkill WITH htmlCourse,  (find out why htmlSkill property is working?)
    {
      htmlSkill: 'Form',
      status: 'Not Started',
    },
    {
      htmlSkill: 'Styles',
      status: 'Started',
    },
    {
      htmlSkill: 'Events',
      status: 'Completed',
    },
  ];

  // ngOnInit(): void {
  //   console.log('This is on html component initialization');
  //   // This is calling getJavaData() from the CourseService
  //   // this.htmlPlan = this.courseService.getHtmlData();
  //   // this.courseService.getHtmlData();
  //   alert('Hello from HTML component');
  //   console.log(this.htmlPlan, 'This is our htmlPlan data');
  // }
  // ngOnDestroy() {
  //   console.log('This is on HTML component removal');
  // }
}
